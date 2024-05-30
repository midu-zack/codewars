function twoSum(nums, target) {
    const numIndices = {};  // Initialize an empty object to store the indices of the numbers

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];  // Calculate the complement
        console.log('complement',complement)

        // Check if the complement exists in the hash map
        if (numIndices.hasOwnProperty(complement)) {

            console.log('numIndices',numIndices)
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
console.log(twoSum(nums, target));  // Output: [0, 1]
