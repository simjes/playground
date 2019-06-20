/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Poll
// ====================================================

export interface Poll_poll_answers {
  __typename: "Answer";
  id: string;
  answer: string;
}

export interface Poll_poll {
  __typename: "Poll";
  id: string;
  question: string;
  answers: Poll_poll_answers[] | null;
}

export interface Poll {
  poll: Poll_poll | null;
}

export interface PollVariables {
  id: string;
}
