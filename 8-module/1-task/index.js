'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    const _ = this;
    const tHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    _.el = document.createElement('table');
    _.tBody = document.createElement('tbody');
    _.tBodyRows = [];

    items.forEach(function (item, i) {

      const bodyRow = document.createElement('tr');

      for (let key in item){
        if (i === 0){
          let headCol = document.createElement('td');
          headCol.innerText = key;
          headRow.appendChild(headCol);
        }

        const bodyCol = document.createElement('td');
        bodyCol.innerText = item[key];
        bodyRow.appendChild(bodyCol);
      }

      _.tBody.appendChild(bodyRow);
      _.tBodyRows.push(bodyRow);

    });

    tHead.appendChild(headRow);
    _.el.appendChild(tHead);
    _.el.appendChild(_.tBody);


    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    _.sort = function (column, desc = false) {
      _.tBodyRows.sort(function (current, next) {
        if ( parseInt(current.cells[column].innerHTML) ){
          if (desc) {
            return next.cells[column].innerHTML - current.cells[column].innerHTML;
          } else {
            return current.cells[column].innerHTML - next.cells[column].innerHTML;
          }
        } else {
          if (desc) {
            return (next.cells[column].innerHTML > current.cells[column].innerHTML) ? 1 : -1;
          } else {
            return (next.cells[column].innerHTML > current.cells[column].innerHTML) ? -1 : 1;
          }
        }
      });

      for (let i = 0; i < _.tBodyRows.length; i++) {
        _.tBody.appendChild(_.tBodyRows[i])
      }
    };
}
