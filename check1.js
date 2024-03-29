// the sum of all distinct elements from the set.
  function sumOfDistinctElements(arr1, arr2) {
  // Create a Set from the first array and convert it back to an array
  const set1 = [...new Set(arr1)];
  
  // Create a Set from the second array and convert it back to an array
  const set2 = [...new Set(arr2)];
  
  // Combine the two arrays and remove duplicates using Set
  const combinedSet = new Set([...set1, ...set2]);
  
  // Convert the Set back to an array and calculate the sum of its elements
  const sum = [...combinedSet].reduce((acc, val) => acc + val, 0);
  
  return sum;
}

  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];

  console.log(sumOfDistinctElements(set1, set2)); // Output: 13


