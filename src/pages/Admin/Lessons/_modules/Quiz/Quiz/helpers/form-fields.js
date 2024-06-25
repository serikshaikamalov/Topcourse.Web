import { TableColumns } from "helpers/tableColumns";

export const formFields = [
  {
    key: "title",
    label: "Title",
    inputType: "text",
  },
  {
    key: "text",
    label: "Text",
    inputType: "text",
  },
  TableColumns.isActive,
];
