arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2 = [];
for (let i = 0; i <= arr.length; i++) {
  arr2.push(arr.pop());
}
arr = [...arr2];
console.log(arr);
