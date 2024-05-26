import { gql } from "apollo-server-micro";

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

    type Material {
        id: String!
        name: String!
        quantity: Int!
        description: String
        price: Int
    }

    type Query {
        users: [User]!
        getTokens: [VerificationToken]
        getComida: [Material]
        getComidaById(id: String!): Material
    }
`;

export { User };

