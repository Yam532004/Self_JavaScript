// function myFunctionHCN() {
//   var a = parseInt(prompt("Input a: "));
//   var b = parseInt(prompt("Input b: "));
//   document.getElementById("dientichHCN").innerHTML = a * b;
// }

// function myFunctionHV() {
//   var a = parseInt(prompt("Input a: "));
//   document.getElementById("dientichHV").innerHTML = a * a;
// }

// function myFunctionHello() {
//   var person = prompt("Enter your name: ");
//   if (person != null) {
//     document.getElementById("demo").innerHTML =
//       person + " enjoy this moment! Ahihi";
//   }
// }
function myFunction(){
    //Cach 3: 
    // Cach1 :var p = document.getElementById("nhap").value;
    var p =document.querySelector("input[name = 'nhap']").value;
    var greeting;
    if(p==0){
        greeting="Your core is 0"
        // document.getElementById("demo").innerHTML = "Your score is 0";
        // document.getElementById("demo").style.color= yellow;
    }
    else if (p>0){
        greeting="Your core > 0"
    }
    else{
        greeting = "Your core < 0"
    }

    document.getElementById("demo").innerHTML =greeting;
    
}