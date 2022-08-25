function calculateNetPayable(pricePerKilo,quantityInKilo,discountPercentage) {
   
    // Provide Solution Code Here
    let answer=""
    if(typeof pricePerKilo !=='number' || typeof quantityInKilo !== 'number' || typeof discountPercentage !== 'number'){
      console.log(answer)
      return answer="Invalid Input Types, All Inputs Should Be of Type Number !!" 
  }else{
      netPay= (pricePerKilo*quantityInKilo)-((pricePerKilo*quantityInKilo)*discountPercentage/100)
      return answer= netPay.toString();
  }
  
  }
console.log(calculateNetPayable(1000,25,7.5));
