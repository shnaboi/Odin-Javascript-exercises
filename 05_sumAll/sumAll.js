const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0) {
        sum = 'ERROR';
    } else if (typeof a != "number" || typeof b != "number") {
        sum = 'ERROR';
    } else if (a > b) {
        const loop = (a - b) + 1;
        for (let i = b; i < loop + 1; i++) {
           sum += i;
        }
    } else if (b > a) {
        const loop = (b - a) + 1;
        for (let i = a; i < loop + 1; i++) {
            sum += i;
        }
    } else {
        sum = 'ERROR'
    }
    return sum;
}

// test


// Do not edit below this line
module.exports = sumAll;
