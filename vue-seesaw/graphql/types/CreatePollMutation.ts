/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreatePollMutation
// ====================================================

export interface CreatePollMutation_createPoll {
  __typename: "Poll";
  id: string;
}

export interface CreatePollMutation {
  createPoll: CreatePollMutation_createPoll;
}

export interface CreatePollMutationVariables {
  question: string;
  answers: string[];
}
