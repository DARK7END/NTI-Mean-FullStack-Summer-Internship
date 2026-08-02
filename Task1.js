// Task 1
console.log('JS is running successfully');

// Task 2
alert('Ready to practice!');

// Task 3
var productName = "Laptop";
var price = 15000;
var isAvailable = true;

console.log(productName);
console.log(typeof productName);

console.log(price);
console.log(typeof price)

console.log(isAvailable);
console.log(typeof isAvailable);

// Task 4
document.getElementById("mainTitle").innerText = "Time Practice";

// Task 5
var city = "Cairo";
var country = "Egypt";
var cityLabel = country + ", " + city;
console.log(cityLabel)

// Task 6
var cityLabel2 = `Location: ${city} - ${country}`;
console.log(cityLabel2)

// Task 7
var itemPrice = 120;
var quantity = 3;

var total = itemPrice * quantity;
var diffFrom400 = 400 - total;
var mulResult = itemPrice * quantity;
var divResult = itemPrice / quantity;
var modResult = itemPrice % quantity;
var powResult = 2 ** quantity;

console.log("total = " + total);
console.log("diff from 400 = " + diffFrom400);
console.log("mul = " + mulResult);
console.log("div = " + divResult);
console.log("mod = " + modResult);
console.log("pow = " + powResult);

// Task 8
var color = prompt("what is your favorite color?");
console.log("Your favorite color is: " + color);

// Task 9
var score = 20;
var textScore = "20";
console.log(score == textScore);
console.log(score === textScore);
// == بتقارن القيم بس وبتحول النوع لوحدها عشان تقدر تقارن
// === بتقارن القيمة و النوع مع بعض فعشان كده هترجع false

// Task 10
var num = prompt("enter quantity");

var num1 = Number(num);
console.log(num1);
console.log(typeof num1);

var num2 = parseInt(num);
console.log(num2);
console.log(typeof num2);

var num3 = +num;
console.log(num3);
console.log(typeof num3);

// Task 11
var fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);
fruits[1] = "orange";
fruits.push("grape");
console.log(fruits);

// Task 12
var course = {
  title: "JavaScript",
  hours: 20,
  level: "Beginner"
};
course.title = "Advanced JavaScript";
console.log(course.hours);
console.log(course);

// Task 13
var hasAccount = true;
var isVerified = false;
console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);

// Task 14
var balance = 50;
balance += 30;
balance *= 2;
balance -= 20;
console.log(balance); // 140

// Task 15
var hotelName = prompt("hotel name?");
var nights = prompt("how many nights?");
var isConfirmed = confirm("is the booking confirmed?");
var bookingMsg = `Hotel: ${hotelName}, Nights: ${nights}, Confirmed: ${isConfirmed}`;
alert(bookingMsg);
console.log(bookingMsg);

// Task 16
// توقعي: "100"
console.log(2 + 8 + "0");
// توقعي: "280"
console.log("2" + 8 + 0);
// توقعي: "280"
console.log(2 + "8" + 0);
// شغلته لقيت التوقع صح، لان اول ما بيدخل نص في العملية كل حاجة بعده بتتحول لنص

// Task 17
var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
console.log(city1, city2);
// city1 فضلت Alex لان القيمة اتنسخت مش اتحطت اشارة على نفس المكان

var car1 = { brand: "Toyota" };
var car2 = car1;
car2.brand = "Honda";
console.log(car1, car2);
// هنا car1 اتغير كمان مع ان احنا عدلنا في car2! لان الاتنين بيشاورو على نفس الobject في الذاكرة

var car3 = Object.assign({}, car1);
car3.brand = "BMW";
console.log(car1, car3);
// دلوقتي car1 ما اتغيرش لاننا عملنا نسخة جديدة فعلا مش مجرد اشارة

// Task 18
var mixedBag = ["hello", 10, false, null, undefined, { a: 1 }, [1, 2]];

for (var i = 0; i < mixedBag.length; i++) {
  console.log(typeof mixedBag[i]);
}
// اللي لاحظته ان typeof null بيطلع "object" وده مش منطقي بس ده bug قديم في اللغة نفسها من زمان وسايبينه كده عشان مش هيبوظوا كود ناس تانية

// Task 19
var customerName = prompt("customer name?");
var orderPrice = prompt("order price?");
var paid = confirm("is the payment done?");
orderPrice = Number(orderPrice);
var orderMsg = "Customer: " + customerName + " - Price: " + orderPrice + " - Paid: " + paid;

console.log(orderMsg);
alert(orderMsg);
document.getElementById("result").innerText = orderMsg;

// Task 20
var n1 = prompt("first number");
var n2 = prompt("second number");
n1 = Number(n1);
n2 = Number(n2);

console.log(n1 + " + " + n2 + " = " + (n1 + n2));
console.log(n1 + " - " + n2 + " = " + (n1 - n2));
console.log(n1 + " * " + n2 + " = " + (n1 * n2));
console.log(n1 + " / " + n2 + " = " + (n1 / n2));
console.log(n1 + " % " + n2 + " = " + (n1 % n2));
console.log(n1 + " ** " + n2 + " = " + (n1 ** n2));

// Task 21
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a + b + c + d + e);
// المشكلة ان c مكتوبة كنص مش رقم، فلما الجمع يوصلها هي وكل اللي بعدها بيتحولوا نصوص وبيتلزقوا مش بيتجمعوا

c = Number(c);
console.log(a + b + c + d + e); // 210

// Task 22
function makeInvoiceLine(item, qty, paid) {
  return "Invoice >= Item: " + item + " | Qty: " + qty + " | Paid: " + paid;
}

var itemName = prompt("item name?");
var itemQty = prompt("qty?");
var itemPaid = confirm("paid?");

var invoiceLine = makeInvoiceLine(itemName, Number(itemQty), itemPaid);
console.log(invoiceLine);
document.getElementById("result").innerText = invoiceLine;

// Task 23
function saveUsername() {
  var name = document.getElementById("username").value;

  if (name == "") {
    document.getElementById("result").innerText = "Username is required";
  } else {
    document.getElementById("result").innerText = "Saved successfully: " + name;
  }

  console.log({
    username: name,
    status: "saved"
  });
}

// Task 24
var a = "15";
var b = 15;
var c = null;
var d;
var e = [15];
var f = { value: 15 };

console.log("a =", a, "| type:", typeof a, "| ==15:", a == 15, "| ===15:", a === 15);
console.log("b =", b, "| type:", typeof b, "| ==15:", b == 15, "| ===15:", b === 15);
console.log("c =", c, "| type:", typeof c, "| ==15:", c == 15, "| ===15:", c === 15);
console.log("d =", d, "| type:", typeof d, "| ==15:", d == 15, "| ===15:", d === 15);
console.log("e =", e, "| type:", typeof e, "| ==15:", e == 15, "| ===15:", e === 15);
console.log("f =", f, "| type:", typeof f, "| ==15:", f == 15, "| ===15:", f === 15);

// Task 25
var pName = prompt("product name?");
var brand = prompt("brand?");
var pPrice = prompt("price?");
var category = prompt("category?");
var inStock = confirm("is this product in stock?");

pPrice = Number(pPrice);

var productInfo = {
  productName: pName,
  brand: brand,
  price: pPrice,
  category: category,
  inStock: inStock
};

var cardMsg = `Product: ${pName}, Brand: ${brand}, Price: ${pPrice}, Category: ${category}, In Stock: ${inStock}`;

alert(cardMsg);
console.log(productInfo);
document.getElementById("result").innerText = cardMsg;

// Bonus
console.log("First Letter:", pName[0]);
