// 4. How does variable declare?
var name = "Mehrab Hossain Munna";
// 5. How does variables value changes or updates?
var name = "Mehrab Munna";
// 9. =,-,*,/
var num1 = 50;
var num2 = 60;
var total = num1 + num2;

/* -------------- */

// 13. How to declare an Array
var arr = ["Monitor", "Mouse", "Keyboard", "Notebook"];
// 14. Array element ber kore kivabe?
var arr = arr.length;
// ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো
var index = arr.indexOf(25);
// ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে
arr[2] = "46";
// ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
var index = arr.indexOf("Mouse");
// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।
var myMoney = 100;
if (myMoney > 80000) {
  console.log("I will by MAC");
} else if (myMoney > 60000) {
  console.log("I will buy Gaming Computer");
} else if (myMoney > 40000) {
  console.log("I will by Lenovo Computer");
} else if (myMoney > 20000) {
  console.log("I will buy second hand laptop");
} else {
  console.log("I will do with Mobile");
}
//২৫. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
var sentence = 0;
while (sentence < 39) {
  console.log("আসকে আমার মন ভালো নেই");
  sentence++;
}
// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও
for (i = 58; i <= 98; i++) {
  console.log(i);
}
/* Another Way */
var i = 58;
while (i <= 98) {
  console.log(i);
  i++;
}
// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
var i = 412;
while (i <= 456) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++; /*Ek kore kore barabo*/
}
// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
var i = 581;
while (i <= 623) {
  if (i % 2 == 1) {
    console.log(i);
  }
  i++;
}
// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।
var learned = ["html", "css", "bootstrap", "tailwind", "js"];
for (i = 0; i < learned.length; i++) {
  console.log(learned[i]);
}
// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও
var phoneUsed = ["Symphony", "Walton", "Asus", "Umidigi", "Xiaomi"];
var i = 0;
while (i < phoneUsed.length) {
  console.log(i + " " + phoneUsed[i]);
  i++;
}
// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
for (i = 30; i <= 86; i++) {
  console.log(i);
  if (i == 44) {
    break;
  }
}
// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।
var bookPrices = [120, 250, 100, 80, 350];
for (var i = 0; i < bookPrices.length; i++) {
  var bookPrice = bookPrices[i];
  if (bookPrice > 200) {
    continue;
  }
  console.log(bookPrice);
}
