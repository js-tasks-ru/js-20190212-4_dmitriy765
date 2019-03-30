'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {

  let list = document.createElement('ul');

  friends.forEach(function(item){
    let liItem = document.createElement('li');
    liItem.innerHTML = `${item.firstName} ${item.lastName}`;
    list.appendChild(liItem);
  });

  return list;

}
