import {gql} from "apollo-server-micro";

const User = gql`

    type User {
        id: ID!
        name: String!
        email:String!
    }

    type VerificationToken {
        identifier: String!
        token: String!
    }


    type Query {
        users: [User]!
        getTokens: [VerificationToken]
    }
`;

export {User};