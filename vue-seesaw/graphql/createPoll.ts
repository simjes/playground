import gql from 'graphql-tag';

export default gql`
  mutation CreatePoll($question: String!, $answers: [String!]!) {
    createPoll(question: $question, answers: $answers) {
      id
    }
  }
`;
