let arr=[];
for(let i=0; i<15;i++){
  arr[i] = Math.round(Math.random()*100);
}
let min=(numbers)=>{
  if(numbers.length > 2){
    return min([numbers[0],min(numbers.slice(1))]);
  }else{
      return numbers[0]>numbers[1] ? numbers[1] : numbers[0]
  } 
      
};
