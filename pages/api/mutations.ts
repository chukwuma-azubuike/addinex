import { gql } from '@apollo/client';

export const ADD_EVENT = gql`
mutation createEvent($value: number, $timestamp: number) {
      createEvent(
      value: $value
      timestamp: $timestamp
      ){
        value
      }
}
`;

