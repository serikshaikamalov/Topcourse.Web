import { gql } from "@apollo/client";

export const GET_COURSES_QUERY = gql`
  query {
    getCourses {
      id
      name
      text
      status
    }
  }
`;
