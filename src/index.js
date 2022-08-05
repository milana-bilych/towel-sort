module.exports = function towelSort (matrix) {

  let total = [];

  if (matrix === undefined) {
    return total;
  }

  for (i = 1; i < matrix.length; i = i + 2) {
    matrix[i].reverse();
  }
  total = [].concat(...matrix);

  return total;
}
