var billAmount = 100;

function gratutity(){
    return billAmount * 0.2;  
  }

function totalWithGrat(amount){
  return gratuity() + amount;
}

console.log("your total, including gratutity is: $" +  totalWithGrat(billAmount).toFixed(2));