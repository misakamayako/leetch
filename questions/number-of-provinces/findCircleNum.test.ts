import findCircleNum from "./findCircleNum";

test('1',()=>{
  expect(findCircleNum( [[1,1,0],[1,1,0],[0,0,1]])).toBe(2)
})
test('2',()=>{
  expect(findCircleNum( [[1,0,0],[0,1,0],[0,0,1]])).toBe(3)
})
test('3',()=>{
  expect(findCircleNum( [
    [1,0,0,1,0,0,1,0,0,0],
    [0,1,0,0,0,0,0,0,1,1],
    [0,0,1,0,0,0,0,0,0,0],
    [1,0,0,1,0,1,0,0,0,1],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,0,1,0,1,0,0],
    [1,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,1,0,1,0,0],
    [0,1,0,0,0,0,0,0,1,1],
    [0,1,0,1,0,0,0,0,1,1]
  ])).toBe(3)
})
