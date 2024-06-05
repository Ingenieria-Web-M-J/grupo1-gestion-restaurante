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