import { gql } from "@apollo/client";

export const CourseAddMutation = gql`
  mutation AddCourse($courseInput: CourseInput!) {
    addCourse(courseInput: $courseInput) {
      id
      name
      text
      status
    }
  }
`;
