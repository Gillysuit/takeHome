const cleanData = array => {
  const returnArr = [];
  const tempArr = array;
  const releaseNotes = tempArr.shift();

  let mergedUpdate = "";
  let counter = 0;
  for (let i = 0; i <= tempArr.length - 1; i += 1) {
    let cleanedStr = tempArr[i].replace("###" || "##", "");
    mergedUpdate += cleanedStr + ",";
    counter += 1;
    if (counter % 3 === 0) {
      returnArr.push(mergedUpdate);
      mergedUpdate = "";
    }
  }
  return [releaseNotes, returnArr];
};

export default cleanData;
