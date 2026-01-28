let nums = [12, 3, 55, 7, 29];
let mayor = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > mayor) {
    mayor = nums[i];
  }
}

console.log("Mayor:", mayor);
