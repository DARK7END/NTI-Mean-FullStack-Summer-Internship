// Task 1

for(var i=1;i<=10;i++)
{
console.log(i);
}

// Task 2

for(var i=2;i<=20;i=i+2)
{
console.log(i);
}

// Task 3

var sum=0;

for(var i=1 ; i<=15;i++)
{
sum=sum+i;
}

console.log("Total sales = "+sum);

// Task 4

var i=1;

while(i<=7)
{
console.log(i);
i++;
}

// Task 5

var i=8;

while(i>=1)
{
console.log(i);
i--;
}

// Task 6

var i=1;

do
{
console.log(i);
i++;
}
while(i<=5);

// Task 7

var itemsInCart=10;

while(itemsInCart<5)
{
console.log("Start Shopping");
}

do
{
console.log("Start Shopping");
}
while(itemsInCart<5);
// while مش هتشتغل
// do while هتشتغل مرة واحدة

// Task 8

var userName="Ali";
var userAge=22;
var isStudent=true;

console.log(userName);
console.log(typeof userName);

console.log(userAge);
console.log(typeof userAge);

console.log(isStudent);
console.log(typeof isStudent);

// Task 9

var dbPrice=10;
var inputPrice="10";

console.log(dbPrice==inputPrice);
console.log(dbPrice===inputPrice);
// == القيمة
// === القيمة و النوع

// Task 10

var name=prompt("Enter your name");

alert("Welcome "+name);

console.log("Welcome "+name);

// Task 11

var q=prompt("Enter quantity");

console.log(Number(q));
console.log(typeof Number(q));

console.log(parseInt(q));
console.log(typeof parseInt(q));

console.log(+q);
console.log(typeof +q);

// Task 12

var a=10;
var b=3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// Task 13

var age=prompt("Enter age");

if(age>=18)
{
console.log("You can enter");
}
else
{
console.log("Sorry, underage");
}

// Task 14

var grade=prompt("Enter grade");

if(grade>=90)
{
console.log("A");
}
else if(grade>=80)
{
console.log("B");
}
else if(grade>=70)
{
console.log("C");
}
else
{
console.log("F");
}

// Task 15

var age=prompt("Enter age");

console.log(age>=18 ? "Adult" : "Minor");

// Task 16

var day=prompt("Enter day");

switch(day)
{
case "Friday":
console.log("Friday");
break;

case "Saturday":
case "Sunday":
console.log("Weekend");
break;

case "Monday":
console.log("Monday");
break;

default:
console.log("Default");
}

// Task 17

var price=prompt("Enter price");

for(var i=1;i<=10;i++)
{
console.log(i+" x "+price+" = "+i*price);
}

// Task 18

var size=prompt("Enter file size");

if(size>0)
{
for(var i=1;i<=size;i++)
{
console.log(i);
}
}
else
{
console.log("Invalid file size");
}

// Task 19

var start=prompt("Start");
var end=prompt("End");

for(var i=start;i<=end;i++)
{
if(i%2==0)
{
console.log(i+" express");
}
else
{
console.log(i+" normal");
}
}

// Task 20

var students=["Ahmed","Sara","Ali","Mona"];

for(var i=0;i<students.length;i++)
{
console.log("Student "+(i+1)+": "+students[i]);
}

// Task 21

var sum=0;

for(var i=1;i<=5;i++)
{
var money=Number(prompt("Enter expense"));
sum=sum+money;
}

console.log("Total = "+sum);
console.log("Average = "+sum/5);

// Task 22

var correctPin="1234";
var attempts=0;

while(attempts<3)
{
var pin=prompt("Enter PIN");

if(pin==correctPin)
{
console.log("Login Success");
break;
}

attempts++;

if(attempts==3)
{
console.log("Login Failed");
}
}

// Task 23

var hasAccount=true;
var isVerified=false;

console.log(hasAccount&&isVerified);
console.log(hasAccount||isVerified);
console.log(!hasAccount);

if(hasAccount&&isVerified)
{
console.log("Welcome back");
}
else if(hasAccount&&!isVerified)
{
console.log("Please verify your account");
}
else
{
console.log("Please sign up");
}


// Task 24

var a=40;
var b=50;
var c="60";
var d=30;
var e=30;

var total=a+b+Number(c)+d+e;

console.log(total);

if(total>=20 && total<=100)
{
for(var i=1;i<=total;i++)
{
console.log(i);
}
}
else
{
console.log("Too big");
}


// Task 25

var n=Number(prompt("Enter number"));

if(n<0)
{
console.log("Invalid number");
}
else
{
var f=1;

for(var i=1;i<=n;i++)
{
f=f*i;
}

console.log(n+"! = "+f);
alert(n+"! = "+f);
}