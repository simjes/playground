/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PollQuery
// ====================================================

export interface PollQuery_poll_answers {
  __typename: "Answer";
  id: string;
  answer: string;
}

export interface PollQuery_poll {
  __typename: "Poll";
  id: string;
  question: string;
  answers: PollQuery_poll_answers[] | null;
}

export interface PollQuery {
  poll: PollQuery_poll | null;
}

export interface PollQueryVariables {
  id: string;
}
