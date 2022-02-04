function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  const mergedArr = [];
  let i = 0;
  let j = 0;
  let arr1Item = arr1[i];
  let arr2Item = arr2[j];
  while(arr1Item || arr2Item){
    if(arr2Item === undefined || arr1Item < arr2Item){
        mergedArr.push(arr1Item)
        i++
        arr1Item = arr1[i]
    } else {
        mergedArr.push(arr2Item)
        j++
        arr2Item = arr2[j]
      }
  }
  console.log(mergedArr);
  return mergedArr;
}

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);

//Method 02
function mergeSortedArrays2(arr1, arr2) {
  const mergeSortedArr = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  return mergeSortedArr;
}

mergeSortedArrays2([0, 3, 4, 31], [3, 4, 6, 30]);
