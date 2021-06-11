/**
 * @param {number} numBottles 9
 * @param {number} numExchange 3
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let total = numBottles
    while(numBottles){
        let drink = Math.floor(numBottles/numExchange)
        if(!drink) break;
        total += drink
        numBottles = drink + (numBottles%numExchange)
    }
    return total
};