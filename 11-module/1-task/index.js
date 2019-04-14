(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);
        }

        showTooltip = (e) => {
          const _ = e.target;
          const _coords = _.getBoundingClientRect();
          const tooltipText = _.getAttribute('data-tooltip');

          this.el.classList.add('tooltip_active');
          this.el.innerHTML = tooltipText;
          this.el.style.left = _coords.left + 'px';

          if ( window.innerHeight > (this.el.clientHeight + _coords.top + _coords.height + this.indent) ){
            this.el.style.top = _coords.top + _coords.height + this.indent + 'px';
          } else {
            this.el.style.top = _coords.top - ( this.el.clientHeight + this.indent ) + 'px';
          }

        };

        hideTooltip = () => {
          this.el.classList.remove('tooltip_active');
        };

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */

        attach(root) {

          root.querySelectorAll('[data-tooltip]').forEach(elem => {
            elem.addEventListener('mouseover', this.showTooltip);
            elem.addEventListener('mouseout', this.hideTooltip);
          });
        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {
          document.body.querySelectorAll('[data-tooltip]').forEach(elem => {
            elem.removeEventListener('mouseover', this.showTooltip);
            elem.removeEventListener('mouseout', this.hideTooltip);
          });
        }
    }

    window.Tooltip = Tooltip;
})();