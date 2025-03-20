const  nums = [1,2,3,4,5];

const squares = nums.map((num)=>{
  return (num*num);
})

console.log(squares)

const names = ["camilo","kuba","marci"]

const capitalizedFirst = names.map((name)=>{
  return (name[0].toUpperCase() + name.slice(1))
})

console.log(capitalizedFirst)

const wrapPAround = capitalizedFirst.map((capitalized)=>{
  return `<p>${capitalized}</p>`
})

console.log(wrapPAround)