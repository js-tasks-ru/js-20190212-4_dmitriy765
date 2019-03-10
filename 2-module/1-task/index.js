/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
  const newObj = {};

  for (let prop in obj) {

    if ((typeof obj[prop] === 'object') && !!obj[prop]) {
      newObj[prop] = clone(obj[prop]);
    } else {
      newObj[prop] = obj[prop];
    }
  }


  return newObj;
}