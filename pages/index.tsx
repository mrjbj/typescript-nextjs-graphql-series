import { gql } from "apollo-boost";
import Link from "next/link";
import * as React from "react";
import { Mutation } from "react-apollo";
import Layout from "../components/Layout";

const IndexPage: React.FunctionComponent = () => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>Hello Jason Jones! 👋</h1>
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
            <Mutation
                mutation={gql`
                    mutation {
                        login(email: "jason@brucejones.biz", password: "superman") {
                            id
                            firstName
                            lastName
                            email
                            name
                        }
                    }
                `}
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
