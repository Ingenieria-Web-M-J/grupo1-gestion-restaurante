import { gql } from "apollo-server-micro";

export const GET_VERIFICATION_TOKEN = gql`

        query GetVerificationToken{
            getTokens{
                identifier
                token
            }
        } 
        
`;
export const GET_COMIDA = gql`

        query getComida{
            getComida{
                id
                name
                quantity
                description
                price
            }
        }
`

export const GET_COMIDA_BY_ID = gql`
    
            query getComidaById($id: String!){
                getComidaById(id: $id){
                    id
                    name
                    quantity
                    description
                    price
                }
            }
`

export const CREATE_COMIDA = gql`
    mutation createMaterial($id: String!, $name: String!, $quantity: Int!, $userId: String!, $description: String, $price: Int!){
        createMaterial(id: $id, name: $name, quantity: $quantity, userId: $userId, description: $description, price: $price){
            id
            name
            quantity
            description
            price
            userId
        }
    }
`

export const CREATE_PEDIDO = gql`
    mutation createPedido($id: String!, $movementType: String!, $quantity: Int!, $materialId: String!, $userId: String!, $state: Enum_Movement_State!){
        createPedido(id: $id, movementType: $movementType, quantity: $quantity, materialId: $materialId, userId: $userId, state: $state){
            id
        }
    }
`

export const UPDATE_COMIDA = gql`
    mutation updateMaterial($id: String!, $name: String!, $quantity: Int!, $userId: String!, $description: String, $price: Int!){
        updateMaterial(id: $id, name: $name, quantity: $quantity, userId: $userId, description: $description, price: $price){
            id
            name
            quantity
            description
            price
            userId
        }
    }
`

export const GET_MOVEMENT = gql`
            query getMovement{
                getMovement{
                    id
                    material{
                        id
                        name
                        quantity
                        description
                        price
                    }
                    materialId
                    quantity
                    userId
                    state
                }
            }
`

export const DELETE_MOVEMENT = gql`
            mutation deleteMovement($id: String!){
                deleteMovement(id: $id){
                    id
                    material{
                        id
                        name
                        quantity
                        description
                        price
                    }
                    materialId
                    quantity
                    userId
                    state
                }
            }
`