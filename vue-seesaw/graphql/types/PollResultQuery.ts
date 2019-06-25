/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PollResultQuery
// ====================================================

export interface PollResultQuery_poll_answers {
  __typename: "Answer";
  id: string;
  answer: string;
  votes: number;
}

export interface PollResultQuery_poll {
  __typename: "Poll";
  id: string;
  question: string;
  answers: PollResultQuery_poll_answers[] | null;
}

export interface PollResultQuery {
  poll: PollResultQuery_poll | null;
}

export interface PollResultQueryVariables {
  id: string;
}
