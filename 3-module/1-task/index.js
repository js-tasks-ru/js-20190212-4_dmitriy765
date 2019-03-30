/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let result = [];

  data.forEach(function(item) {
    if (item.age <= age){
      result.push(`${item.name}, ${item.balance}`);
    }
  });

  return result.join('\n');
}


