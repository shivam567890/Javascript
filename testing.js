const radius= [1,2,3,4];

 const area= function (radius){

    return Math.PI * radius *radius;
 };

 const circumference= function (radius){

    return 2* Math.PI *radius;
 };

const CalculateArea = function circle(radius,logic){

    const ans=[];

    for(let i=0;i<radius.length;i++){
        ans.push(logic(radius[i]));
    }

    return ans;
}


console.log(CalculateArea(radius,area));
// console.log(CalculateArea(radius,circumference));     or 
console.log(radius.map(circumference));




const arr=[2,3,6,2,5,7];


 const ans= arr.reduce(function(acc,curr){
   return acc=acc+curr;
 },0);

   const max_element= arr.reduce(function (acc,curr){
         if(curr>acc){
            acc=curr;
         }
    return acc;
   },0);
 console.log(ans);
 console.log(max_element);



 const users = [
    { firstName:"akshay", lastName:"bhinge", age:26 },
    { firstName:"donald", lastName:"trump", age:75 },
    { firstName:"elon", lastName:"musk", age:50 },
    { firstName:"deeika", lastName:"padukone", age:26 },
];



//   try to get the name of all the users in an array ;




   const value= users.map((x)=> x.firstName+ " " + x.lastName);

   console.log(value);



   //  find the nag of people and amount of people that have the same age;


    

const AAge= users.reduce(function(acc,curr){
      if(acc[curr.age]){
        acc[curr.age]++;
      }else{
        acc[curr.age]=1;
      }

      return acc;
},{});

console.log(AAge);



// find all people who's age is less than 40

 function GreaterAge(x){
    if(x.age<40){return x.firstName + " " + x.lastName;}
 }


const agegreaterthan40 = users.filter(GreaterAge);    // or


const GrtrAge= users.filter((x)=>x.age<40).map((x)=> x.firstName);
// console.log(GrtrAge);


// console.log(agegreaterthan40);




//setTimeout;


console.log("hello world");


setTimeout(function(){
   
    console.log("hello world");
},5000);


console.log("hello world");



//  example of CallBack Hell (it is like creating pyramid of Doom)

 const cart= ["shoes","pants","kurta"];


 // in e-commarce websites user first add product into their cart then do payment then add 
 // then only they can see all odered products otherwise it will be empty.


 api.createOrder(cart,function(){
     
       api.proceedPayment(function(){
            
             api.showOrderHistory(function(){
                    api.updateWallet();
             })
       })
 });
 //callBack hell.

 //  This problem will be solved through promis chaining.





 //   inversion of control  -> It means we are blindly trusting that our api will respond 
//  as we have expected and when the api response isobtained we will again call another api.
//  ex.
   // when create order call is completed then automatically proceedPayment will be callled.
   // but the problem here is that it might be possible that create orderwill return twice or 
   // may not return or may contain some errors.
  createOrder(cart,function(){    
       proceedPayment();
  })


  // to avoid this problem we will use promise.
  // promise give us gurantee that the function will be called only once

       
    const promise= createOrder(cart);
        
      promise.then(function(orderId){
            //proceedPayment will be called only once.
            proceedPayment(orderId);
      });
     

      // Promise is an object which represent the eventual completion of asynchronous operation.

       
     





// Promis channing ;

  //Ex.

    createorder(cart).then(function(orderId){
       return  proceedPayment(orderId);
    })
    .then(function(paymentInfo){
      return updateWallet(paymentInfo);
    });






    const cart1=["kurta","shoes","jackets"];


    const Promise= createOrder(order);

    Promise.then(function(orderId){
         console.log(orderId);       
        // proceedPayment(orderId);
    }).catch(function(err){
      console.log(err);
    })



    //Producer or creation of createOrder function.

    function createOrder(order){  
       
      const pr= new Promise(function(resolve,reject){
           //createOrder
           //ValidateCart
           //orderId

            if(!validateCart(cart)){
              const err= new Error("cart is not valid");
              reject(err);
            }   // If cart is not valid then we will reject the further api calls that should happen after this api call.
       
             // Logic for createOrder
              
             const orderId= "2q312412";

              if(orderId){
                resolve(orderId);
              }

      })
    }


