/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Chiều dài HCN => var length
 * * * Chiều rộng HCN => var width
 * * * Diện tích => var area
 * * * Chu vi => perimeter
 * * Xử lý
 * * * area = length * width
 * * * perimeter = (length + width) * 2
 * * Đầu ra
 * * * Xuất ra màn hình kết quả diện tích, chu vi tùy vào nút mà người dùng nhấn vào
 */

function countArea() {
    var length = parseFloat(document.getElementById("txtLength").value);
    var width = parseFloat(document.getElementById("txtWidth").value);
    var area = length * width;
    document.getElementById("txtResult__4--1").innerHTML = "Diện tích HCN: " + area;
}

function countPerimeter() {
    var length = parseFloat(document.getElementById("txtLength").value);
    var width = parseFloat(document.getElementById("txtWidth").value);
    var perimeter = (length + width) * 2;
    document.getElementById("txtResult__4--2").innerHTML = "Chu vi HCN: " + perimeter;
}

function enableButton__4() {
    var length = document.getElementById("txtLength").value;
    var width = document.getElementById("txtWidth").value;
 
    if (length != "" && width != "") {
       document.getElementById("btnCountArea").disabled = false;
       document.getElementById("btnCountPerimeter").disabled = false;
    } else {
       document.getElementById("btnCountArea").disabled = true;
       document.getElementById("btnCountPerimeter").disabled = true;
    }
 }