import { gql } from "apollo-server-micro";

const User = gql`

    enum Enum_Movement_State {
        PENDIENTE
        COCINANDO
        ENVIADO
    }


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

    type InventoryMovement {
        id: String!
        material: Material
        materialId: String!
        quantity: Int!
        userId: String!
        type: String!
        state: Enum_Movement_State
    }

    type Query {
        users: [User]!
        getTokens: [VerificationToken]
        getComida: [Material]
        getComidaById(id: String!): Material
        getMovement: [InventoryMovement]
    }

    type Mutation {
        deleteMovement(id: String!): InventoryMovement!
    }


`;

export { User };

