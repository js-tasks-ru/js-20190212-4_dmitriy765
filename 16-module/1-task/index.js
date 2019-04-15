/**
 * processGenerator
 * @param {Generator} gen - генератор
 * @param {Generator} result - результат выполнения следующей итерации генератора
 * @returns {Promise}
 */
function processGenerator(gen, result) {
  let next = gen.next(result);

  if (!next.done) {
    return next.value.then(
      result => processGenerator(gen, result),
      err => gen.throw(err)
    );
  } else {
    return new Promise((resolve, reject) => {
      resolve(next.value);
      reject('something wrong');
    });
  }

}


