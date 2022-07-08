var x = "Fuck this life";
console.log(x)
console.log("fuck this shit i'm out") 
var x = 2;
console.log (x);

var x;
x = 20;
y = 10;
console.log(x*y)

var Love = "Love";
Love += "You";
console.log(Love + "!")

if (false|| null ||
  undefined || "" || 0 || NaN ){
console.log("won't execute")
}
else {
    console.log ("all right")
}

if (true && 1 && 2 && 3){
    console.log("All right")
}

var sum = 0;
for (var i = 0 ; i < 10 ; i++){
    console.log(i)
    sum = sum + i;
}
console.log("sum of 2 through 9 is:")

function menu (menu) {
    console.log("milk shake + " + menu)
}
menu("pizza")
menu("big mac")

var menu = new Object();
menu.name = "mcdonlad";
menu.ceo = new Object();
menu.ceo = "mr.mcdonald";
menu.foods1 = "bigmac";
menu.foods2 = "lilmac";

console.log(menu);
console.log("company ceo name is: " +  menu.ceo)
console.log(menu["name"]);

function multipy(x,y){
return x*y-x;
}   
console.log(multipy(5,3))

var names = ["ermiya , Emad , mostafa"]
console.log(names);

function Done (){
    console.log(
        document.getElementById("name").value
    )
}
function Done2 (){
    console.log(
        document.getElementById("name2").value
    )
};