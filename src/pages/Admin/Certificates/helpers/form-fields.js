import inputTypeEnum from "enums/inputTypes";
import { TableColumns } from "helpers/tableColumns";

export const formFields = [
  TableColumns.studentId,
  TableColumns.courseId,
  {
    key: "givenDate",
    label: "Given Date",
    inputType: inputTypeEnum.date,
  },
  TableColumns.isActive,
];
