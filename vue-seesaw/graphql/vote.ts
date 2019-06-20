import { gql } from 'apollo-boost';

export default gql`
  mutation vote($id: ID!) {
    vote(answerId: $id) {
      poll {
        id
      }
    }
  }
`;
