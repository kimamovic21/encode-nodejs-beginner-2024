// function sum(num1, num2) {
    // return  num1 + num2;
// }

export const sum = (num1, num2) => {
    const result = num1 + num2;
    return result;
};

export const subtract = (num1, num2) => {
    return num1 - num2;
};

export const multiply = (num1, num2) => {
    return  num1 * num2;
};

export const divide = (num1, num2) => {
    if (num2 === 0) {
        return 'Division with 0 is not possible';
    };
    return num1 / num2;
};

export const power = (base, exponent) => {
    return Math.pow(base, exponent);
};

// let kerim = 'kerim'
// let myNum = 1000;

// ES 5 nacin
// module.exports = { sum, subtract, multiply, divide, power, kerim, myNum };
 