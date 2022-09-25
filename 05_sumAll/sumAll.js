const sumAll = function (n1, n2) {
  if (typeof n1 != "number" || typeof n2 != "number") {
    return "ERROR";
  } else if (n1 < 0 || n2 < 0) {
    return "ERROR";
  } else {
    let sortingArr = [n1, n2];
    sortingArr.sort(function (a, b) {
      return b - a;
    });
    let biggerNum = sortingArr[0];
    let smallerNum = sortingArr[1];
    let sum = 0;
    for (let i = smallerNum; i <= biggerNum; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
