/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Giá trị 5 số => var number_1, ... var number_5
 * * * Giá trị trung bình => var average
 * * Xử lý
 * * * average = (number_1 + ... + number_5)/5
 * * Đầu ra
 * * * Xuất ra màn hình kết quả giá trị trung bình của 5 số
 */

function countAvg() {
   var number_1 = parseFloat(document.getElementById("txtNumber1").value);
   var number_2 = parseFloat(document.getElementById("txtNumber2").value);
   var number_3 = parseFloat(document.getElementById("txtNumber3").value);
   var number_4 = parseFloat(document.getElementById("txtNumber4").value);
   var number_5 = parseFloat(document.getElementById("txtNumber5").value);

   var avegare = (number_1 + number_2 + number_3 + number_4 + number_5) / 5;

   document.getElementById("txtResult__2").innerHTML = "Giá trị trung bình: " + avegare;
}

function enableButton__2() {
   var number_1 = document.getElementById("txtNumber1").value;
   var number_2 = document.getElementById("txtNumber2").value;
   var number_3 = document.getElementById("txtNumber3").value;
   var number_4 = document.getElementById("txtNumber4").value;
   var number_5 = document.getElementById("txtNumber5").value;

   if (number_1 != "" && number_2 != "" && number_3 != "" && number_4 != "" && number_5 != "") {
      document.getElementById("btnCountAvg").disabled = false;
   } else {
      document.getElementById("btnCountAvg").disabled = true;
   }
}