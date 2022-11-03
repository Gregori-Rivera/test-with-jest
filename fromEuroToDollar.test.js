let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const {
    fromEuroToDollar
} = require("./fromEuroToDollar")

test('1 Euro sera igual a 1.2 dollar', (

) => {
    let result = fromEuroToDollar(1)
    expect(result).toBe(1.2)
})