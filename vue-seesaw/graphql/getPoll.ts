import gql from 'graphql-tag';

export default gql`
  query Poll($id: ID!) {
    poll(where: { id: $id }) {
      id
      question
      answers {
        id
        answer
      }
    }
  }
`;
