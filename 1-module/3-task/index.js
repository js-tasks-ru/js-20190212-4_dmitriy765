'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
  let array = str.replace(/,/g, ' ').split(' ');

  array = array.filter(function(elem){
    return Number(elem)
  });

  let minVal = Number(array[0]);
  let maxVal = minVal;

  for (let i = 1; i < array.length; i++) {

    if (Number(array[i]) > maxVal) {
      maxVal = Number(array[i]);
    }

    if (Number(array[i]) < minVal) {
      minVal = Number(array[i]);
    }
  }

  const obj = {'min': minVal, 'max': maxVal};
  return obj;
}