/**
 *
 * Данная функция просто преобразует массивы с объектами в простой формат
 * {
 *  students: [{id: 1, name: 'Serik'}, {id: 2, name: 'Berik'}]
 * }
 *
 * Output:
 * {
 *  students: [1, 2]
 * }
 */
export const toBackendDTO = (formData) => {
  return Object.entries(formData).reduce((dict, [k, v]) => {
    if (Array.isArray(v)) {
      v = v.map((i) => i.id);
    } else {
      if (typeof v === "object") {
        // Same for Object
        v = v["id"];
      }
    }

    return {
      ...dict,
      [k]: v,
    };
  }, {});
};
