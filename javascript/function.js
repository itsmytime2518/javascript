// function saymyname(){
//     console.log("M");
//     console.log("E");
//     console.log("G");
//     console.log("H");
//     console.log("A");
// }


// let one = 52, two = 66;
// addTwonumber(one,two)


// function addTwonumber(a,b){
//       let result = a + b;
//       return result
// }
// console.log(result);


// function calculateExpression(arr) {
//     let total = 0;
    
    // Loop through the array
    // for (let i = 0; i < arr.length; i++) {
        // let num = arr[i];
        
        // BODMAS ke rule ke hisaab se expression calculate karte hain
        // total += (num * 2 + 10) / (num - 1);  // Brackets pehle, phir multiplication/division, phir addition/subtraction
    // }
    
    // return total;  // Final result ko return karte hain
// }


// let numbers = [5, 10, 15];
// let result = calculateExpression(numbers);
// console.log(result);








// const result = number1 + number2

// function addTwonumber(number1,number2){
    // const result = number1 + number2
    // return result

//     return number1 + number2
// }



// addTwonumber(3,5)

// let result = addTwonumber(3,5)

// console.log(result);


// function greet(a,b,c,d,e,f) {
//     const result = a+b-55;
    // console.log(result);
//     return result
   

// }

// const a = 558784, b = 544785, cc = 455544;

// greet(a,b,cc);

// const result1 = greet(a,b,cc)

// console.log(result1);


// const meghaAge = 28, aliAge = 33, slaudinAge = 58;

// greet(meghaAge,aliAge,slaudinAge)

// const result2 = greet(meghaAge,aliAge,slaudinAge)

// console.log(result2);

// if (result1 < result2) 
//     {
//     console.log( Boolean(result1 < result2)); // सही तरीके से Boolean का उपयोग
// } else {
//     console.log( Boolean(result1 >= result2)); // सही तरीके से Boolean का उपयोग
// }

// ***************************Scope***********************

// function one() {
//     const username = "Megha"
//     console.log(username);
    

    // function two(){
    //     const website = "youtube"
        // console.log(username);  function ke andr function bnane se usko bahar waale function mai access nahi kiya jaa skta.age function ke andr waale function ko access krna hai to yaa print/run krna hai to andr waale function ke andr ki print/ya log kiya jaa skta hai.
    // }

    // console.log(website);
    
    // two()
    
// }

// one()


// if (true){
//     const username = " Megha"
//     if( username === " Megha"){
//         const website = " Google"
//         console.log(username + website);
//     }

    // console.log(website);
// }

// console.log(username);

// ********************************intresting******************************

// const num = 5;
// addone(num);

// function addone(num) {
    // const nume1 = num + 1; // '=' का उपयोग करते हुए nume1 को num + 1 से असाइन करें
    // return nume1; // nume1 को रिटर्न किया जा रहा है
// }

// const result1 = addone(num); // addone(num) का रिजल्ट result1 में स्टोर होगा
// console.log(result1); // यह 6 प्रिंट करेगा

// ************************for loop***************************

// const array = [10, 20, 30, 40, 50]; 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
//     console.log("Element at index", index, "is", element); 
// }

// const submit = ["Megha",55,true];

// console.log("lenght is "+ submit.length );


// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2021,
//     getDetails: function() {  // Function (method) ko define kar rahe hain
//         return `${this.brand} ${this.model} (${this.year})`;  // 'this' se object ki properties access kar rahe hain
//     }
// };

// // Method ko call karna
// let details = car.getDetails();
// console.log(details);  // Output: Toyota Camry (2021)


function calculationSum(arr) {

    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
        
    }
    return total
    
  
}


let sum = [55,95,54,85,78,8895,5512,120,]

let result = calculationSum(sum)

console.log( `this is subtotal for my array = `,result , 'final');






