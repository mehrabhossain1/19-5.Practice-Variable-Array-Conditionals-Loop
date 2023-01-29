// // 24.
// var myMoney = 45000;
// if (myMoney > 80000) {
//   console.log("I will by MAC");
// } else if (myMoney > 60000) {
//   console.log("I will buy Gaming Computer");
// } else if (myMoney > 40000) {
//   console.log("I will by Lenovo Computer");
// } else if (myMoney > 20000) {
//   console.log("I will buy second hand laptop");
// } else {
//   console.log("I will do with Mobile");
// }

// // 25.
// var sentence = 0;
// while (sentence < 3) {
//   console.log("k");
//   sentence++;
// }
// 29.
// for (i = 58; i <= 98; i++) {
//   console.log(i);
// }
// 30.
// var i = 412;
// while (i <= 456) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }
// 31.
// var i = 581;
// while (i <= 623) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
//   i++;
// }
// 33.
// var learned = ["html", "css", "bootstrap", "tailwind", "js"];
// for (i = 0; i < learned.length; i++) {
//   console.log(i + " " + learned[i]);
// }
// 34.
// var phoneUsed = ["Symphony", "Walton", "Asus", "Umidigi", "Xiaomi"];
// var i = 0;
// while (i < phoneUsed.length) {
//   console.log(i + " " + phoneUsed[i]);
//   i++;
// }
// 35.
// for (i = 30; i <= 86; i++) {
//   console.log(i);
//   if (i == 44) {
//     break;
//   }
// }
// 36.
var bookPrices = [120, 250, 100, 80, 350];
for (var i = 0; i < bookPrices.length; i++) {
  var bookPrice = bookPrices[i];
  if (bookPrice > 200) {
    continue;
  }
  console.log(bookPrice);
}
