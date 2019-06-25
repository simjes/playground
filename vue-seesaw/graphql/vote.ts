import gql from 'graphql-tag';

export default gql`
  mutation vote($id: ID!) {
    vote(answerId: $id) {
      poll {
        id
      }
    }
  }
`;
