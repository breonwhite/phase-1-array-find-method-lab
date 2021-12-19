function findWin(object){
    return object.result === "W"
}
function superbowlWin(array){
    const foundItem = array.find(findWin);
    if (foundItem){
        return foundItem.year;
    }
}
console.log(superbowlWin(record));