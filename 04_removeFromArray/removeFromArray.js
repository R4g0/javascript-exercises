const removeFromArray = function (arr, ...args) {
  for (let i = 0; i < args.length; i++) {
    delete arr[arr.indexOf(args[i])];
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != undefined) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
