const _ = require("lodash");
const nums = _.range(1, 9);
console.log(nums);

const chunks = _.chunk(nums, 3);
console.log(chunks);

const right = _.takeRight(nums, 2);
console.log(right)