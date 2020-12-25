import containsCycle from './containsCycle'
test('1',()=>{
  expect(containsCycle([["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]])).toBe(true)
},1000)
test('2',()=>{
  expect(containsCycle([["a","b","b"],["b","z","b"],["b","b","a"]])).toBe(false)
},1000)
test('3',()=>{
  expect(containsCycle(
    [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]])).toBe(true)
},1000)
test('4',()=>{
  expect(containsCycle(
    [["d","b","b"],["c","a","a"],["b","a","c"],["c","c","c"],["d","d","a"]]
  )).toBe(false)
},1000)
