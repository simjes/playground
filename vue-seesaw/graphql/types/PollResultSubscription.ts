/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: PollResultSubscription
// ====================================================

export interface PollResultSubscription_pollResult_node_poll_answers {
  __typename: "Answer";
  id: string;
  answer: string;
  votes: number;
}

export interface PollResultSubscription_pollResult_node_poll {
  __typename: "Poll";
  id: string;
  question: string;
  answers: PollResultSubscription_pollResult_node_poll_answers[] | null;
}

export interface PollResultSubscription_pollResult_node {
  __typename: "Answer";
  poll: PollResultSubscription_pollResult_node_poll;
}

export interface PollResultSubscription_pollResult {
  __typename: "AnswerSubscriptionPayload";
  node: PollResultSubscription_pollResult_node | null;
}

export interface PollResultSubscription {
  pollResult: PollResultSubscription_pollResult;
}

export interface PollResultSubscriptionVariables {
  pollId: string;
}
