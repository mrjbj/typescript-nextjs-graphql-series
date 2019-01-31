import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";

class MyApp extends App<any> {
    // wrap the front-end component hierarchy with <ApolloProvider> to provide
    // GraphQL resolvers and apollo cache to entire application.
    render() {
        const { Component, pageProps, apolloClient } = this.props;
        return (
            <Container>
                <ApolloProvider client={apolloClient}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        );
    }
}

export default withApollo(MyApp);
