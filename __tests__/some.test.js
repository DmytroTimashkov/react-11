import some from "../src/some";

const arr = [1,2,3,4,5,6];
const arr2 =[1,3,5,7];
const even = elem => elem % 2 === 0;

test('someTest',()=>{
    expect(some(arr,even)).toEqual(true)
    expect(some(arr2,even)).toEqual(false)
})