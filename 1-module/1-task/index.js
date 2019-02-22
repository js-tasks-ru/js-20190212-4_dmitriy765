/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

'use strict';

function pow (m, n) {
  let result = 1;

  for (let i = 0; i < n; i++){
    result *= m;

    console.log(result);
  }

  return result;
}

const number = prompt('Введите число', 0);

if (!isNaN(number)){
  const power = prompt('Введите степень', 0);

  if (!isNaN(power) && power > 0 && !(power % 1)){
    alert('Ваш результат: ' + pow(number, power));
  } else {
    alert('Степень должна быть целым числом!');
  }
} else {
  alert('Возводить в степень можно только число');
}
