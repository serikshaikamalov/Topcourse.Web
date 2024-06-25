import inputTypeEnum from "enums/inputTypes";
import { statusesData } from "enums/statusEnum";
import { toDate } from "./dateHelper";
import { Button } from "@mui/material";

export const TableColumns = {
  id: {
    key: "id",
    label: "ID",
  },
  // Порядок отображения
  index: {
    key: "#",
    label: "#",
    render: (_, inx) => inx + 1,
  },

  name: {
    key: "name",
    label: "Название",
    required: true,
  },
  email: {
    key: "email",
    label: "Email",
  },

  phone: {
    key: "phone",
    label: "Тел.",
  },
  createdBy: {
    key: "createdBy",
    label: "Создан",
  },
  description: {
    key: "description",
    label: "Описание",
  },
  title: {
    key: "title",
    label: "Заголовок",
  },
  text: {
    key: "text",
    label: "Текст",
  },
  richText: {
    key: "text",
    label: "Текст",
    inputType: inputTypeEnum.richText,
  },
  createdDate: {
    key: "createdAt",
    label: "Дата создания",
    formatter: (v) => toDate(v),
  },
  active: {
    key: "active",
    label: "Статус",
    render: (item) => {
      return item["active"] === true ? "Активный" : "Неактивный";
    },
  },
  isActive: {
    key: "isActive",
    label: "Активный",
    inputType: "checkbox",
    formatter: (v) => (v ? "Активный" : "Неактивный"),
  },
  order: {
    key: "order",
    label: "Порядок",
  },
  password: {
    key: "password",
    label: "Пароль",
  },
  systemName: {
    key: "systemName",
    label: "Системное название",
  },
  author: {
    key: "author.name",
    label: "Автор",
    formatter: (v) => v,
  },
  roles: (key = "roles") => ({
    label: "Роли",
    key,
    formatter: (item) => item?.map((x) => x.name).join(", "),
  }),
  status: {
    key: "status",
    label: "Статус",
    options: statusesData,
    inputType: inputTypeEnum.select,
    formatter: (s) => statusesData.find((x) => x.id === s)?.name,
  },
  mainImage: {
    key: "mainImage",
    label: "Главное фото",
    inputType: inputTypeEnum.richText,
  },
  comment: {
    key: "comment",
    label: "Комментарий",
    inputType: inputTypeEnum.richText,
  },
  courseId: {
    key: "courseId",
    label: "Курс",
    inputType: "select",
    options: [],
  },
  studentId: {
    key: "studentId",
    label: "Студент",
    inputType: "select",
    options: [],
  },
  ban: {
    key: "isBan",
    label: "Бан",
    inputType: "checkbox",
    isOptional: true,
    render: (item) =>
      item.isBan ? <Button>Вернуть</Button> : <Button>Банить</Button>,
    doAction: () => {},
  },
  domain: {
    key: "domain",
    label: "Домен",
  },
};
