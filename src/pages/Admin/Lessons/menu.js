const buildMenu = (params) => {
  const { id: courseId, lessonId, chapterId } = params;
  const parentPath = `/admin/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/`;

  const menu = [
    // {
    //   path: parentPath + "manage",
    //   label: "Главная",
    // },
    {
      path: parentPath + "quiz",
      label: "Управление тестом",
    },
    {
      path: parentPath + "homeworks",
      label: "Домашней работа",
    },
    {
      path: parentPath + "comments",
      label: "Вопросы ответы",
    },
  ];
  return menu;
};

export default buildMenu;
