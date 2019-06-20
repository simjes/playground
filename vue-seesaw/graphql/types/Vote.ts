/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Vote
// ====================================================

export interface Vote_vote_poll {
  __typename: "Poll";
  id: string;
}

export interface Vote_vote {
  __typename: "Answer";
  poll: Vote_vote_poll;
}

export interface Vote {
  vote: Vote_vote;
}

export interface VoteVariables {
  id: string;
}
