export const mapToObject = (dataWithMapType) => {
  let searchParamsObject = {};
  dataWithMapType.forEach((v, k) => {
    searchParamsObject[k] = v;
  });

  return searchParamsObject;
};
