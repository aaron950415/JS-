let arr=[];;
for(let i=0; i<10;i++){
  arr[i] = Math.round(Math.random()*100);
}

let quickSort=(arr)=>{
  if(arr.length <= 1) {return arr};
  let index = Math.floor(arr.length/2);
  let mid = arr.splice(index,1)[0];
  let left = [];
  let right = [];
  for(let i=0;i<arr.length;i++){
    arr[i]<mid ? left.push(arr[i]) : right.push(arr[i])
  }
  return quickSort(left).concat(mid,quickSort(right))
}
quickSort(arr);
console.log(arr);
console.log(quickSort(arr)
