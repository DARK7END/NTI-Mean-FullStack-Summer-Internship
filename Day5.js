// Functions Tasks | اول ملف
// Task 1

function multiply(a,b)
{
    return a*b;
}

// Task 2

function calculate(a,b,fun)
{
    return fun(a,b);
}

// Task 3

function displayResult(result)
{
    console.log(result);
}

// Task 4

var result=calculate(5,4,multiply);

displayResult(result);

// Task 2 setTimeout

function greetUser()
{
    setTimeout(function()
    {
        console.log("Hello, User!");
    },3000);
}

greetUser();

// Task 3 setInterval

var num=10;

var timer=setInterval(function()
{
    console.log(num);
    num--;

    if(num==0)
    {
        console.log("Time's up!");
        clearInterval(timer);
    }

},1000);

// Clear setInterval after 5 seconds

var x=10;

var timer2=setInterval(function()
{
    console.log(x);
    x--;
},1000);

setTimeout(function()
{
    clearInterval(timer2);
},10000);

// Clear setTimeout

var message=setTimeout(function()
{
    console.log("This will be cleared!");
},10000);

clearTimeout(message);


// CRUD Task | تاني ملف


var items=[];

// Create

function addItem(item)
{
    items.push(item);
}

// Read

function showItems()
{
    console.log(items);
}

// Update

function updateItem(index,item)
{
    items[index]=item;
}

// Delete

function deleteItem(index)
{
    items.splice(index,1);
}

addItem("Apple");
addItem("Banana");
addItem("Orange");

showItems();
updateItem(1,"Mango");
showItems();
deleteItem(0);
showItems();