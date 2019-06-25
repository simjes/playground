import gql from 'graphql-tag';

export default gql`
  query PollResultQuery($id: ID!) {
    poll(where: { id: $id }) {
      id
      question
      answers {
        id
        answer
        votes
      }
    }
  }
`;
