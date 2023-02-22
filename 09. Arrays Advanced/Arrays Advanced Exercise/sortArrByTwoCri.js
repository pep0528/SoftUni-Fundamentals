function sortAnArrayByTwoCriteria (arr) {
    let criteriaSort = (curr, next) => 
        curr.length - next.length || curr.localCompare(next);
    arr.sort(criteriaSort);
    console.log(arr.join('\n'));
}

sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma'])