function firstRecurringCharacter(input) {
  let hashObj = {};
  for (let i = 0; i < input.length; i++) {
    if (hashObj[input[i]]) {
      console.log(input[i]);
      return true;
    }
    hashObj[input[i]] = true;
  }
  console.log(undefined);
  return undefined;
}

firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]);