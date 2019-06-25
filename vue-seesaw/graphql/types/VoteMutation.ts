/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VoteMutation
// ====================================================

export interface VoteMutation_vote_poll {
  __typename: "Poll";
  id: string;
}

export interface VoteMutation_vote {
  __typename: "Answer";
  poll: VoteMutation_vote_poll;
}

export interface VoteMutation {
  vote: VoteMutation_vote;
}

export interface VoteMutationVariables {
  id: string;
}
