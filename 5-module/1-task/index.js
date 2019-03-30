'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let statusIndex;
  let genderIndex;
  let ageIndex;

  const tableHead = table.querySelectorAll('thead td');
  const tableBody = table.querySelectorAll('tbody tr');

  tableHead.forEach(function (td, i) {
    td.innerHTML === "Status" ? statusIndex = i
      : td.innerHTML === "Gender" ? genderIndex = i
      : td.innerHTML === "Age" ? ageIndex = i
      : null;
  });

  tableBody.forEach(function (tr) {
    const statusCell = tr.querySelector('td:nth-child('+(statusIndex + 1)+')');
    const genderCell = tr.querySelector('td:nth-child('+(genderIndex + 1)+')');
    const ageCell = tr.querySelector('td:nth-child('+(ageIndex + 1)+')');

    if(statusCell.getAttribute('data-available')){
      const availableClass = statusCell.getAttribute('data-available') === 'true' ? 'available' : 'unavailable';
      tr.classList.add(availableClass);
    } else {
      tr.setAttribute('hidden', '')
    }

    if (genderCell.innerHTML === "m"){
      tr.classList.add('male');
    } else {
      tr.classList.add('female');
    }

    if (parseInt(ageCell.innerHTML) < 18){
      tr.style.textDecoration = 'line-through';
    }

  });

}
