import { gql } from 'apollo-boost';

export default gql`
  mutation CreatePoll($question: String!, $answers: [String!]!) {
    createPoll(question: $question, answers: $answers) {
      id
    }
  }
`;
