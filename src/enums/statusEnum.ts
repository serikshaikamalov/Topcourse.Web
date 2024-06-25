
export enum statusEnum {
  active = "Активный",
  inactive = "Неактивный",
  draft = "Черновик",
}

export const statusesData = Object.entries(statusEnum).map((x) => ({
  id: x[0],
  name: x[1],
}));
