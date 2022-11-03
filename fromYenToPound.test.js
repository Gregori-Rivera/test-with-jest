let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const {
    fromYenToPound
} = require("./fromYenToPound")

test('127,9 yen sera igual a 0.8 pound', (

) => {
    let result = fromYenToPound(127.9)
    expect(result).toBe(0.8)
})