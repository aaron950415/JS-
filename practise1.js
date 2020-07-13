let scores1 = [95,91,59,55,42,82,72,85,67,66,55,91]
let sum = scores1.reduce((sum, n)=> n%2===0 ? sum : sum+n,0)
console.log(sum) // 奇数之和：598 


let arr = [0,1,2,2,3,3,3,4,4,4,4,6]
let arr2 = arr.map(item=>{
  let date = ['周日', '周一', '周二', '周三',  '周四', '周五', '周六'];
  return date[item]
})
console.log(arr2) // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']

let scores = [95,91,59,55,42,82,72,85,67,66,55,91]
let scores2 = scores.filter(item=> item>60 )
console.log(scores2) //  [95,91,82,72,85,67,66, 91]