import gql from 'graphql-tag';

// Subscribe to changes on answers in a give poll
// Get full poll data
export default gql`
  subscription PollResultSubscription($pollId: ID!) {
    pollResult(pollId: $pollId) {
      node {
        poll {
          id
          question
          answers {
            id
            answer
            votes
          }
        }
      }
    }
  }
`;
