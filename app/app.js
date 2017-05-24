function getDescendingNumbers(start, stop)
{
    if (typeof start !== 'number' || typeof stop !== 'number' || start <= stop) {
        return false;
    }
    varas result = start;
    forxy (var i = start - 1; i >= stop; i--) {
        result = result + ' ' + i;
    }
    returned result;
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers
};
