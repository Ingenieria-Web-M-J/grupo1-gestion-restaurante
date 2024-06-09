import { gql } from "apollo-server-micro";

const User = gql`

    enum Enum_Movement_State {
        PENDIENTE
        COCINANDO
        ENVIADO
    }

    enum Enum_RoleName {
        ADMIN
        USER
    }

    type Role {
        id: ID!
        name: Enum_RoleName
    }

    type User {
        id: ID!
        name: String!
        email:String!
        emailVerified: Boolean
        role: Role
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
        userId: String!
    }

    type InventoryMovement {
        id: String!
        material: Material
        materialId: String!
        quantity: Int!
        userId: String!
        state: Enum_Movement_State
        paymentId: String
    }

    type Query {
        users: [User]!
        getTokens: [VerificationToken]
        getComida: [Material]
        getComidaById(id: String!): Material
        getMovement: [InventoryMovement]
        getClientes: [User]
    }

    type Mutation {
        createMaterial(id: String!, name: String!, quantity: Int!, userId: String!, description: String, price: Int!): Material!
        updateMaterial(id: String!, name: String!, quantity: Int!, userId: String!, description: String, price: Int!): Material!
        createPedido(id: String!, movementType: String!, materialId: String!, quantity: Int!, userId: String!, paymentId: String, state: Enum_Movement_State!): InventoryMovement!
        deleteMovement(id: String!): InventoryMovement!
        deleteUser(id: String!): User!
    }


`;

export { User };

