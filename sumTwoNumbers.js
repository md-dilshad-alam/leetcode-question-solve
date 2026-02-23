var twoSum = function(nums, target) {

for(let i = 0; i<= nums.length; i++){

  for(let j = 0; j<= nums.length; j++){

    if ((nums[i] + nums[j]) == target){

      return [i, j];

    }

  }

}
    
};

let nums = [4, 5, 6, 8, 10];
target = 11;
console.log(twoSum(nums,target));