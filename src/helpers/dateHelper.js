import moment from "moment";
import "moment/locale/ru";
moment().local("ru");

const toDate = (dateAsString) => {
  return moment(dateAsString).format("MMMM DD YYYY, hh:mm:ss");
};

const fromNow = (dateAsString) => {
  return moment(dateAsString).fromNow();
};

/**
 * Date => native format of Browser
 * @param {*} d: Date
 * @returns string
 */
const toNativeDate = (d) => (d ? moment(d).format("YYYY-MM-DD") : "");
const toFullDateName = (d) => (d ? moment(d).format("DD MMMM, YYYY") : "");

export { toDate, fromNow, toNativeDate, toFullDateName };
