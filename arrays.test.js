import { afterAll, expect, test, vi } from "vitest"

import { filterOdd, filterEven, square } from "./arrays.mjs"

test('Filter odd numbers', () => {
    expect(filterOdd([1, 2, 3, 4, 5])).toEqual([1, 3, 5])
})

test('Filter even numbers', () => {
    expect(filterEven([1, 2, 3, 4, 5])).toEqual([2, 4])
})

test('3 squared is 9', () => {
    expect(square(3)).toBe(9)
})

test('[2, 3] squared is [4, 9]', () => {
    expect(square([2, 3])).toEqual([4, 9])
})