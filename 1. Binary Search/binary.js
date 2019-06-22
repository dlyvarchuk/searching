const binarySearch = (array, value) => {
    const midIndex = Math.floor(array.length / 2);
    const midValue = array[midIndex];

    if (value === midValue) return true;
    else if (array.length > 1 && value < midValue)
        return binarySearch(array.splice(0, midIndex), value);
    else if (array.length > 1 && value > midValue)
        return binarySearch(array.splice(midIndex + 1, array.length), value);
    else return false;
};

function _binarySearch(nums, target) {
    let floorIndex = -1;
    let ceilingIndex = nums.length;

    while (floorIndex + 1 < ceilingIndex) {
        let distance = ceilingIndex - floorIndex;
        let halfDistance = Math.floor(distance / 2);
        let guessIndex = floorIndex + halfDistance;

        let guessValue = nums[guessIndex];

        if (guessValue === target) {
            return true;
        }

        if (guessValue > target) {
            ceilingIndex = guessIndex;
        }
        else {
            floorIndex = guessIndex;
        }
    }

    return false;
}
