import { test, expect } from 'vitest'
import { add } from './calc'

test("1加2等于3",()=>{
  expect(add(1,2)).toBe(3)
})