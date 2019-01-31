import { gql } from "apollo-boost";

export const loginMutation = gql`
    mutation loginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            firstName
            lastName
            email
            name
        }
    }
`;
