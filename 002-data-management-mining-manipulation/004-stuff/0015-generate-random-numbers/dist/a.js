"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAnotherRandomNumbers = void 0;
function generateAnotherRandomNumbers(limit) {
    let minNumber = 0;
    const min = Math.ceil(minNumber);
    const limitA = Math.floor(limit);
    return Math.floor(Math.random() * (limitA - min + 1)) + min;
}
exports.generateAnotherRandomNumbers = generateAnotherRandomNumbers;
