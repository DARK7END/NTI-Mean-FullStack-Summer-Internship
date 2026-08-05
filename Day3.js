// Task 1

var name=prompt("Enter your name");

name=name.trim();

var arr=name.split(" ");

var result="";

for(var i=0;i<arr.length;i++)
{
var first=arr[i].charAt(0).toUpperCase();
var rest=arr[i].slice(1).toLowerCase();

result=result+first+rest;

if(i<arr.length-1)
{
result=result+" ";
}
}

var count=0;

for(var i=0;i<result.length;i++)
{
if(result[i]!=" ")
{
count++;
}
}

console.log(result);
console.log(count);

alert(result);

// Task 2

var email=prompt("Enter email");

if(email.includes("@") && email.endsWith(".com") && !email.startsWith("@") && !email.includes(" "))
{
console.log("Valid Email");
alert("Valid Email");
}
else
{
console.log("Invalid Email");
alert("Invalid Email");
}

// Task 3

var text=prompt("Enter text");

var ch=prompt("Enter character");

text=text.toLowerCase();
ch=ch.toLowerCase();

var count=0;

for(var i=0;i<text.length;i++)
{
if(text[i]==ch)
{
count++;
}
}

console.log(count);

alert(count);

// Task 4

var text=prompt("Enter sentence");

var word=prompt("Enter word");

text=text.replaceAll(word,"***");

console.log(text);

alert(text);

// Task 5

var first=prompt("First name");

var last=prompt("Last name");

first=first.toLowerCase().trim();

last=last.toLowerCase().trim();

var user=first+"."+last;

if(user.length>15)
{
user=user.slice(0,15);
}

console.log(user);

alert(user);

// Task 6

var text=prompt("Enter sentence");
var word=prompt("Enter word");

if(text.includes(word))
{
console.log("Found");

console.log("First = "+text.indexOf(word));

console.log("Last = "+text.lastIndexOf(word));

var count=0;
var arr=text.split(" ");

for(var i=0;i<arr.length;i++)
{
if(arr[i]==word)
{
count++;
}
}

console.log("Count = "+count);
}
else
{
console.log("Not Found");
}

// Task 7

var text=prompt("Enter sentence");

var arr=text.split(" ");

var result="";

for(var i=0;i<arr.length;i++)
{
var x="";

for(var j=arr[i].length-1;j>=0;j--)
{
x=x+arr[i][j];
}

result=result+x+" ";
}

console.log(result);

// Task 8

var text=prompt("Enter text");

var arr=text.split(" ");

console.log("Words = "+arr.length);

var chars=0;

for(var i=0;i<text.length;i++)
{
if(text[i]!=" ")
{
chars++;
}
}

console.log("Characters = "+chars);

var vowels=0;
var upper=0;
var lower=0;
var digits=0;

for(var i=0;i<text.length;i++)
{
var ch=text[i];

if("aeiouAEIOU".includes(ch))
{
vowels++;
}

if(ch>="A" && ch<="Z")
{
upper++;
}

if(ch>="a" && ch<="z")
{
lower++;
}

if(ch>="0" && ch<="9")
{
digits++;
}
}

console.log("Vowels = "+vowels);
console.log("Digits = "+digits);
console.log("Upper = "+upper);
console.log("Lower = "+lower);

var longest=arr[0];
var shortest=arr[0];

for(var i=0;i<arr.length;i++)
{
if(arr[i].length>longest.length)
{
longest=arr[i];
}

if(arr[i].length<shortest.length)
{
shortest=arr[i];
}
}

console.log("Longest = "+longest);
console.log("Shortest = "+shortest);

// Task 9

var phone=prompt("Enter phone number");

var first=phone.slice(0,4);

var last=phone.slice(-3);

var stars="";

for(var i=0;i<phone.length-7;i++)
{
stars=stars+"*";
}

console.log(first+stars+last);

// Task 10

var text=prompt("Enter sentence");

text=text.trim();

text=text.replaceAll("javascript","JavaScript");

text=text.charAt(0).toUpperCase()+text.slice(1);

if(!text.endsWith("."))
{
text=text+".";
}

console.log(text);

alert(text);

// <3