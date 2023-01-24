const fibonacci = function(x) {
    let array = [1, 1]
    if (x <= 0) {
        return "OOPS"
    } else for (let i = 1; i < x; i++) {
        array.push(array[i] + array[i - 1])
    }
    return array[x-1];
};

// Do not edit below this line
module.exports = fibonacci;
