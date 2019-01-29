// easy config defaults for connecting Apollo Client to GQL backend
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "apollo-boost";
// set and cache request context, make available throughout app
import { setContext } from "apollo-link-context";
// connect to gql over http
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { COOKIE_NAME, GRAPHQL_SERVER_URL } from "../constants/frontEndConstants";
import { isBrowser } from "./isBrowser";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() if running on the server (used by apollo-client)
if (!isBrowser) {
    (global as any).fetch = fetch;
}

interface Options {
    getToken: () => string;
}

// initialState is the cache and cache can store pretty much anything
function create(initialState: any, { getToken }: Options) {
    const httpLink = createHttpLink({
        uri: `${GRAPHQL_SERVER_URL}`,
        credentials: "include"
    });

    // destructure headers from request object, get token from it and
    // add as cookie property back into headers, if found
    const authLink = setContext((_, { headers }) => {
        const token = getToken(); // passed in from initApollo setup
        return {
            headers: {
                ...headers,
                cookie: token ? `${COOKIE_NAME}=${token}` : ""
            }
        };
    });

    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
        link: authLink.concat(httpLink),
        cache: new InMemoryCache().restore(initialState || {})
    });
}

export default function initApollo(initialState: any, options: Options) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!isBrowser) {
        return create(initialState, options);
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState, options);
    }

    return apolloClient;
}
