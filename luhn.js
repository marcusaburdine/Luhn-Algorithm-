function validCard(cardNum) {
    const numString = cardNum.toString()
    const numLength = numString.length
    let X = 0
    let Y = 0
    let Z = 0

    for (let i = numLength - 2; i >= 0; i -= 2) {
        let calc = Number(numString[i]) * 2;
        if (calc >= 10) {
            calc = calc + 1
        }
        X += calc
    }

    for (let j = numLength - 1; j >= 0; j -= 2) {
        Y += Number(numString[j])
    }

    Z = X + Y

    let outPut = Z % 10 == 0 ? true : false;
    console.log(numString, outPut);
    return outPut;
}

validCard(1234567890123456); //should be false
validCard(4408041234567893); //should be true
validCard(38520000023237); //should be true
validCard(4222222222222); //should be true