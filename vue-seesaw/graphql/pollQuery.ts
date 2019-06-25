import gql from 'graphql-tag';

export default gql`
  query PollQuery($id: ID!) {
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
