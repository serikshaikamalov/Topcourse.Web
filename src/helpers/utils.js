/**
  Convert array to string. Example:
  let list = [{'id: 1', 'name': 'A'}, {id: 2, 'name': 'B'}] 
  => 
  result: 'a, b'

  @returns string
 */
const arrayToString = (list, key = "name", separator = ", ") => {
  if (!list || !Array.isArray(list)) {
    return "";
  }
  return list.map((x) => (key ? x[key] : x)).join(separator);
};

function groupBy(arr, key) {
  return arr.reduce(function (acc, x) {
    (acc[x[key]] = acc[x[key]] || []).push(x);
    return acc;
  }, {});
}

/**
 * Find uniq values in array
 *
 */
function uniq(arr, key) {
  if (!arr) {
    return [];
  }

  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr[key])) {
      acc.push(curr[key]);
    }

    return acc;
  }, []);
}

const clearPhoneNumber = (phone) => {
  if (!phone) return;
  return phone.trim().replace(/(^8)|(^\+7)/gi, "");
};

const isEmailAddress = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export { arrayToString, groupBy, uniq, clearPhoneNumber, isEmailAddress };
