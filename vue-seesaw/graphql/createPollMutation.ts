import gql from 'graphql-tag';

export default gql`
  mutation CreatePollMutation($question: String!, $answers: [String!]!) {
    createPoll(question: $question, answers: $answers) {
      id
    }
  }
`;
