function twoSum(nums, target) {
  const numIndices = {};  

  for (let i = 0; i < nums.length; i++) {
 
    const complement = target - nums[i]; // Calculate the complement
    
 
    console.log("complement", complement);

    // Check if the complement exists in the hash map
    if (numIndices.hasOwnProperty(complement)) {
      console.log("numIndices", numIndices);
      // If found, return the indices of the current number and the complement
      return [numIndices[complement], i];
    }

    // If not found, add the current number and its index to the hash map
    numIndices[nums[i]] = i;

    console.log(numIndices);
  }

  // If no solution is found (though the problem guarantees one), return an empty array
  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]




// Question 1 

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

 
var twoSum = function(nums, target) {
   const num = {};

   for (let i = 0; i < nums.length; i++) {
       const complement = target - nums[i];

       if (num.hasOwnProperty(complement)) {
           return [num[complement], i];
       }

       num[nums[i]] = i;
   }
};

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]
