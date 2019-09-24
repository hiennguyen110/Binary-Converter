const convert = function(integerNumber){
    var binaryArr = [];
    const onState = 1;
    const offState = 0;
    while (integerNumber >= 1){
        var gateState = hasRemainder(integerNumber);
        integerNumber = parseInt(integerNumber / 2);
        if (gateState == true){
            binaryArr.push(onState);
        } else {
            binaryArr.push(offState);
        }
    }
    var resultArr= binaryArr.reverse();
    return resultArr;
}

const hasRemainder = function(number){
    number = Number(number);
    if (number % 2 != 0){
        return true;
    } else{
        return false;
    }
    return false;
}

module.exports = {
    convert: convert
}