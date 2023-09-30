import { calculete } from "../src/RideCalculator";

test("Deve fazer o cálculo do preço de uma corrida durante o dia", function () {
    const segments = [
        {distance: 10, date: "2023-09-29T10:00:00"}
    ]
    const price = calculete(segments);
    expect(price).toBe(21)
    
})

test("Deve fazer o cálculo do preço de uma corrida durante a noite", function () {
    const segments = [
        {distance: 10, date: "2023-09-29T23:00:00"}
    ]
    const price = calculete(segments);
    expect(price).toBe(39)
})

test("Deve fazer o cálculo do preço de uma corrida no domingo de dia", function () {
    const segments = [
        {distance: 10, date: "2023-09-24T10:00:00"}
    ]
    const price = calculete(segments);
    expect(price).toBe(29)
})

test("Deve fazer o cálculo do preço de uma corrida no domingo de noite", function () {
    const segments = [
        {distance: 10, date: "2023-09-24T23:00:00"}
    ]
    const price = calculete(segments);
    expect(price).toBe(50)
})

test("Deve retornar -1 se a distanceância for inválida", function () {
    const segments = [
        {distance: -10, date: "2023-09-29T23:00:00"}
    ]
    const price = calculete(segments);
    expect(price).toBe(-1)
})

test("Deve retornar -2 se a data for inválida", function () {
    const segments = [
        {distance: 10, date: "errorData"}
    ]
    const price = calculete(segments);
    expect(price).toBe(-2)
})


test("Deve retornar o valor minimo de 10", function () {
    const segments = [
        {distance: 2, date: "2023-09-29T10:00:00"}
    ]
    const price = calculete(segments);
    expect(price).toBe(10)
})

test("Deve fazer o cálculo do preço de uma corrida durante o dia com múltiplos segmentos", async function () {
    const segments = [
        {distance: 10, date: "2023-09-29T10:00:00"},
        {distance: 10, date: "2023-09-29T10:00:00"},
    ]
    const price = calculete(segments);
    expect(price).toBe(42);    
})