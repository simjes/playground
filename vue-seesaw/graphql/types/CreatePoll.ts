/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreatePoll
// ====================================================

export interface CreatePoll_createPoll {
  __typename: "Poll";
  id: string;
}

export interface CreatePoll {
  createPoll: CreatePoll_createPoll;
}

export interface CreatePollVariables {
  question: string;
  answers: string[];
}
