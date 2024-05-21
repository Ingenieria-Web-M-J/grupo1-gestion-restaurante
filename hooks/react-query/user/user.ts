import { gql } from "apollo-server-micro";

export const GET_VERIFICATION_TOKEN = gql`

        query GetVerificationToken{
            getTokens{
                identifier
                token
            }
        } 
        
`;
