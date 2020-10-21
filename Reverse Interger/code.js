var reverseinteger = function (x) {
    let stop = false;
    let res = 0;
    // add loop while 
    while (!stop) {
        res = res * 10 + (x % 10);
        //The parseInt() function parses a string argument and returns an integer
        //of the specified radix(the base in mathematical numeral systems).
        x = parseInt(x / 10);
        if (x == 0) {
            stop = true;
        }
    }
    //0x7FFFFFFF is a number in hexadecimal (2,147,483,647 in decimal) that represents 
    //the maximum positive value for a 32 - bit signed binary integer
    return (res <= 0x7fffffff && res >= -0x80000000);
};
