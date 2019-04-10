(function () {
  'use strict';

  /**
   * Компонент, который реализует таблицу
   * с возможностью удаления строк
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

  class ClearedTable {

    constructor(data) {
        this.el = document.createElement('table');
        this.data = data;
        this.buildTable();
        this.addEvents();
    }

    buildTable() {
      const tHead = document.createElement('thead');
      tHead.style.textTransform = "capitalize";
      const headRow = document.createElement('tr');
      const tBody = document.createElement('tbody');

      this.data.forEach(function (item, i) {

        const bodyRow = document.createElement('tr');

        for (let key in item){
          if ( key !== 'id' ){
            if (i === 0){
              let headCol = document.createElement('td');
              headCol.innerText = key;
              headRow.appendChild(headCol);
            }

            const bodyCol = document.createElement('td');
            bodyCol.innerText = item[key];
            bodyRow.appendChild(bodyCol);
          }
        }

        const lastCol = document.createElement('td');
        lastCol.innerHTML = '<a href="#delete">X</a>';
        bodyRow.appendChild(lastCol);
        bodyRow.setAttribute('data-id', item.id);

        tBody.appendChild(bodyRow);

      });

      const lastCol = document.createElement('td');
      headRow.appendChild(lastCol);

      tHead.appendChild(headRow);
      this.el.appendChild(tHead);
      this.el.appendChild(tBody);
      this.el.classList.add('pure-table');

    }

    addEvents() {
      this.el.addEventListener('click', e => {
        if ( e.target.getAttribute('href') === '#delete' ){
          this.onRemoved(+e.target.closest('tr').getAttribute('data-id'));
          e.target.closest('tr').remove();
          e.preventDefault();
        }
      });
    }


    /**
     * Метод который выщывается после удалении строки
     * @param {number} id - идентификатор удаляемого пользователя
     */

    onRemoved(id) {
      console.log('removed ', id);
    }
  }

  window.ClearedTable = ClearedTable;
})();
