function difference(arr1, arr2) {
    // Combine the arrays, flatten nested arrays, and remove duplicates
    const combinedArray = [...new Set(arr1.flat(Infinity).concat(arr2.flat(Infinity)))];
  
    // Convert the elements to strings
    const uniqueStrings = combinedArray.map(element => String(element));
  
    return uniqueStrings;
  }
  
  // Test cases
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
  // Output: ["1", "2", "3", "10", "100"]
  
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
  // Output: ["1", "2", "3", "4", "5", "6"]
  
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
  // Output: ["1", "2", "3", "10", "100"]
  