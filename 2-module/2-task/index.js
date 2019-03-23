/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
let arr = [];

function findRecourseve(obj, value, path){

  for (let item in obj) {
    if (typeof obj[item] === "object") {
      let thisPath = !!path ? path+'.'+item : item;

      findRecourseve(obj[item], value, thisPath);
    } else {
      if (obj[item] === value) {
        let thisPath = !!path ? path+'.'+item : item;

        arr.push(thisPath);
      }
    }
  }

  // return arr;
}

function find(obj, value) {

  findRecourseve(obj, value);

  const tmpArr = arr;
  arr = [];

  if (tmpArr.length !== 0) {
    return tmpArr.length === 1 ? tmpArr[0] : tmpArr;
  } else {
    return null;
  }
}