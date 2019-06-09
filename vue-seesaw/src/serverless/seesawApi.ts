import { Context, APIGatewayEvent } from 'aws-lambda';

export async function handler(event: APIGatewayEvent, context: Context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: 'hello ts world' }),
  };
}
