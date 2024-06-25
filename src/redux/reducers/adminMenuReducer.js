import { AdminMenuActions } from "redux/actions/adminMenuActions";
import { MdOutlinePlayLesson } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const adminMenu = [
  {
    icon: MdOutlinePlayLesson,
    path: "courses",
    label: "Курсы",
  },
  {
    icon: FaUsers,
    path: "users",
    label: "Пользователи",
  },
  {
    path: "groups",
    label: "Группа",
  },
  {
    path: "flows",
    label: "Поток",
  },
  {
    path: "subscriptions",
    label: "Управление доступом",
  },
  {
    path: "submissions",
    label: "Результаты теста",
  },
  {
    path: "comments",
    label: "Обратная связь",
  },
  {
    path: "certificates",
    label: "Сертификаты",
  },
  {
    path: "schedules",
    label: "Расписание курсов",
  },
  // {
  //   path: "blog",
  //   label: "Блог",
  // },
  // {
  //   path: "calender",
  //   label: "Календарь",
  // },
  // {
  //   path: "settings",
  //   label: "Настройки",
  // },
];

const initialState = {
  data: [adminMenu],
};

const adminMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case AdminMenuActions.SET_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case AdminMenuActions.REMOVE_LAST:
      return {
        ...state,
        data:
          state.data.length > 0
            ? state.data.filter((i, index, arr) => arr.length - 1 !== index)
            : [],
      };
    default:
      return initialState;
  }
};

export default adminMenuReducer;
