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