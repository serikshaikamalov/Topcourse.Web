export const formFields = [
  {
    key: "userId",
    label: "ФИО",
    inputType: "select",
    options: [],
  },
  {
    key: "courseId",
    label: "Course",
    inputType: "select",
    options: [],
  },
  {
    key: "expiredAt",
    label: "Expired At",
    inputType: "text",
    defaultValue: `${new Date().getFullYear()+1}-${new Date().getMonth()+1}-${new Date().getDate()}`
  },
];
