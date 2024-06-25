const tableConfig = [
  {
    key: "question",
    label: "Cұрақ",
    formatter: (i) => i.title,
  },
  {
    key: "userAnswer",
    label: "Сіздің жауап",
    formatter: (i) => i.title,
  },
  {
    key: "userAnswer",
    label: "Дұрыс",
    formatter: (i) => (i.isRightAnswer ? "Йа" : "Жоқ"),
  },
];

export default tableConfig;
