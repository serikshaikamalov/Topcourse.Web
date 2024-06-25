export const mapFieldWithOptions = (fields, deps) => {
  return fields.map((f) => Object.assign({ ...f }, { ...deps[f.key] }));
};
