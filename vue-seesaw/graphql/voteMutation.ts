import gql from 'graphql-tag';

export default gql`
  mutation VoteMutation($id: ID!) {
    vote(answerId: $id) {
      poll {
        id
      }
    }
  }
`;
