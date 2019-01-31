import { gql } from "apollo-boost";
import Link from "next/link";
import * as React from "react";
import { Mutation } from "react-apollo";
import Layout from "../components/Layout";
import { loginMutation } from "../graphql/user/mutations/login";
import { LoginMutationVariables } from "../generated/apolloComponents";

const IndexPage: React.FunctionComponent = () => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>Hello Jason Jones! 👋</h1>
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
            <Mutation<loginMutation, LoginMutationVariables>
                mutation={loginMutation }
            >
                {mutate => (
                    <button
                        onClick={async () => {
                            const response = await mutate();
                            console.log(response);
                        }}
                    >
                        Call Login Mutation
                    </button>
                )}
            </Mutation>
        </Layout>
    );
};

export default IndexPage;
