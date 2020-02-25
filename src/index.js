exports.min = function min(array) {
    if (array === undefined || array[0] === undefined)
        return 0;
    return Math.min.apply(null, array);
}

exports.max = function max(array) {
    if (array === undefined || array[0] === undefined)
        return 0;
    return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
    if (array === undefined || array[0] === undefined)
        return 0;
    for (var i = 0, sum = 0; i < array.length; i++) {
        sum += array[i];
    }
    if (array == 0)
        return 0

    var avg = sum / array.length;
    return avg;
}