import { afterAll, expect, test, vi } from "vitest"

import { isEven, isOdd } from "./basics.mjs"
import { add, subtract, multiply, divide, umsatzsteuer, inFahrenheit, inCelsius, jahreszeit } from "./basics.mjs"
import { area, fizzbuzz, fibonacci } from "./basics.mjs"

test('Adding 5 to 3 gives 8', () => {
    expect(add(3, 5)).toBe(8)
})

test('Substracting 5 from 8 gives 3', () => {
    expect(subtract(8, 5)).toBe(3)
})

test('Multiplying 4 by 6 gives 24', () => {
    expect(multiply(4, 6)).toBe(24)
})

test('Dividing 12 by 4 gives 3', () => {
    expect(divide(12, 4)).toBe(3)
})

test('Converting 0°C to Fahrenheit is 32°F', () => {
    expect(inFahrenheit(0)).toBe(32)
})

test('Converting -40°C to Fahrenheit is -40°F', () => {
    expect(inFahrenheit(-40)).toBe(-40)
})

test('Converting 32°F to Celsius is 0°C', () => {
    expect(inCelsius(32)).toBe(0)
})

test('Converting -40°F to Celsius is -40°C', () => {
    expect(inCelsius(-40)).toBe(-40)
})

test('0, 2, 4, 8, 44 are even', () => {
    expect(isEven(0)).toBe(true)
    expect(isEven(2)).toBe(true)
    expect(isEven(4)).toBe(true)
    expect(isEven(8)).toBe(true)
    expect(isEven(44)).toBe(true)
})

test('1, 3, 7, 11, 55 are not even', () => {
    expect(isEven(1)).toBe(false)
    expect(isEven(3)).toBe(false)
    expect(isEven(7)).toBe(false)
    expect(isEven(11)).toBe(false)
    expect(isEven(55)).toBe(false)
})

test('1, 3, 5, 9, 77 are odd', () => {
    expect(isOdd(1)).toBe(true)
    expect(isOdd(3)).toBe(true)
    expect(isOdd(5)).toBe(true)
    expect(isOdd(9)).toBe(true)
    expect(isOdd(77)).toBe(true)
})

test('0, 2, 6, 12, 88 are not odd', () => {
    expect(isOdd(0)).toBe(false)
    expect(isOdd(2)).toBe(false)
    expect(isOdd(6)).toBe(false)
    expect(isOdd(12)).toBe(false)
    expect(isOdd(88)).toBe(false)
})

test('Frühlingsmonate', () => {
    expect(jahreszeit(3)).toBe('Frühling')
    expect(jahreszeit(4)).toBe('Frühling')
    expect(jahreszeit(5)).toBe('Frühling')
})
test('Sommermonate', () => {
    expect(jahreszeit(6)).toBe('Sommer')
    expect(jahreszeit(7)).toBe('Sommer')
    expect(jahreszeit(8)).toBe('Sommer')
})

test('Herbstmonate', () => {
    expect(jahreszeit(9)).toBe('Herbst')
    expect(jahreszeit(10)).toBe('Herbst')
    expect(jahreszeit(11)).toBe('Herbst')
})

test('Wintermonate', () => {
    expect(jahreszeit(12)).toBe('Winter')
    expect(jahreszeit(1)).toBe('Winter')
    expect(jahreszeit(2)).toBe('Winter')
})

test('Umsatzsteuer 2005 (18k)', () => {
    expect(umsatzsteuer(18000, 2005)).toBe(3420)
})

test('Umsatzsteuer 2020 (10k)', () => {
    expect(umsatzsteuer(10000, 2020)).toBe(0)
})

test('Umsatzsteuer 2020 (100k)', () => {
    expect(umsatzsteuer(100000, 2020)).toBe(19000)
})

test('Umsatzsteuer 2023 (18k)', () => {
    expect(umsatzsteuer(18000, 2023)).toBe(0)
})

test('Area of unit circle', () => {
    expect(area('circle', { radius: 1 })).toBe(Math.PI)
})

test('Area of triangle', () => {
    expect(area('triangle', { base: 2, height: 1.8 })).toBe(1.8)
})

test('Area of rectangle', () => {
    expect(area('rectangle', { base: 2, height: 1.8 })).toBe(3.6)
})

test('FizzBuzz', () => {
    const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined)
    
    afterAll(consoleMock.mockReset)

    fizzbuzz(10)

    expect(consoleMock).toHaveBeenCalledWith(1)
    expect(consoleMock).toHaveBeenCalledWith(2)
    expect(consoleMock).toHaveBeenCalledWith('fizz')
    expect(consoleMock).toHaveBeenCalledWith(4)
    expect(consoleMock).toHaveBeenCalledWith('buzz')
    expect(consoleMock).toHaveBeenCalledWith('fizz')
    expect(consoleMock).toHaveBeenCalledWith(7)
    expect(consoleMock).toHaveBeenCalledWith(8)
    expect(consoleMock).toHaveBeenCalledWith('fizz')
    expect(consoleMock).toHaveBeenCalledWith('buzz')
})

test('Fibonacci sequence', () => {
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(1)).toBe(1)
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(4)).toBe(3)
    expect(fibonacci(5)).toBe(5)
    expect(fibonacci(10)).toBe(55)
    expect(fibonacci(15)).toBe(610)
})