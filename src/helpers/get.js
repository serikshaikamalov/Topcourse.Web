/**
 Find value in an object by key
 let item = {
    work: {
        id: 1
    }
 }
 */
const get = (item, keyArrayAsString) => {
  if (!keyArrayAsString) return;
  const keys = keyArrayAsString.split(".");
  const key = keys.shift();

  if (keys.length === 0) {
    return item[key];
  }

  return get(item[key], keys.join("."));
};

export default get;
