// Нужно собрать индексы из массива чисел тех, сумма которых составляет target
// in: [3, 4, 6], target: 9, out: [0, 2]

const inArray = [3,4,6]
const target = 9

var twoSum = function(nums, target) {
  const firstDigit = [nums[0], 0]
  const twoDigit = target - firstDigit[0]

  return [0, nums.indexOf(twoDigit)]
}

const result = twoSum(inArray, target) // [0, 2]