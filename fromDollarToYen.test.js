let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const {
    fromDollarToYen
} = require("./fromDollarToYen")

test('1.2 dollar sera igual a 127.9 yen', (

) => {
    let result = fromDollarToYen(1.2)
    expect(result).toBe(127.9)
})