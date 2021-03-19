import { gql } from "@apollo/client/core";

// eslint-disable-next-line import/prefer-default-export
export const GET_DUMMY_QUERY = gql`
  query getDummyQueryData {
    getDummyQueryData {
      data
      statusCode
      statusMessage
    }
  }
`;
