/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Tỷ giá quy đổi => var exchangeRate = 23500
 * * * Số USD quy đổi => var exchangeMoney
 * * * Số tiền VND quy đổi được => var totalMoney
 * * Xử lý
 * * * totalMoney = exchangeMoney * exchangeRate
 * * Đầu ra
 * * * Xuất ra màn hình kết quả số tiền quy đổi được
 */

 function exchangeMoney() {
    var exchangeRate = 23500;
    var exchangeMoney = parseFloat(document.getElementById("txtExchangeMoney").value);

    var totalMoney = exchangeMoney * exchangeRate;

    var currentFormat = new Intl.NumberFormat("vn-VN");

    document.getElementById("txtResult__3").innerHTML = "Thành tiền: " + currentFormat.format(totalMoney) + " VND";
 }

 function enableButton__3() {
   if (document.getElementById("txtExchangeMoney").value != "") {
       document.getElementById("btnExchangeMoney").disabled = false;
   } else {
       document.getElementById("btnExchangeMoney").disabled = true;
   }
}