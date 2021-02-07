/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy dữ liệu của người dùng nhập vào
 * * * Tạo 3 biến để lưu dữ liệu nhập vào
 * * Xử lý
 * * * Tạo hàm tính tổng điểm gồm 5 tham số: điểm môn 1, điểm môn 2, điểm môn 3, điểm vùng, điểm đối tượng
 * * *      => Dùng switch case để tính điểm vùng, điểm đối tượng
 * * * Từ hàm trả về điểm tổng, đem so sánh với điểm chuẩn
 * * *      => Dùng if để so sánh
 * * Đầu ra (output)
 * * * Xuất tổng điểm ra màn hình kèm kết quả Đậu - Trượt
 */


document.getElementById("btnGetResult").addEventListener("click", function () {
    var standardPoint = parseFloat(document.getElementById("txtStandardPoint").value);
    var mark_1 = parseFloat(document.getElementById("txtMark_1").value);
    var mark_2 = parseFloat(document.getElementById("txtMark_2").value);
    var mark_3 = parseFloat(document.getElementById("txtMark_3").value);
    var region = document.getElementById("txtRegion").value;
    var object = parseInt(document.getElementById("txtObject").value);

    var result = "";
    var totalMark = 0;
    if (region != "A" && region != "B" && region != "C" && region != "X") {
        result = "Khu vực: A, B, C (Nhập X nếu không thuộc khu vực ưu tiên)";
    } else if (object > 3 || object < 0) {
        result = "Đối tượng: 1, 2, 3 (Nhập 0 nếu không thuộc đối tượng ưu tiên)";
    } else {
        totalMark = calculateTotalMark(mark_1, mark_2, mark_3, region, object);
        if (totalMark > 30) {
            totalMark = 30;
        }

        if (totalMark >= standardPoint) {
            result = "Kết quả: Đậu - Tổng điểm: " + totalMark;
        } else {
            result = "Kết quả: Trượt - Tổng điểm: " + totalMark;
        }
    }

    document.getElementById("txtResult__1").innerHTML = result;
});

function calculateTotalMark(mark_1, mark_2, mark_3, region, object) {
    var totalMark = mark_1 + mark_2 + mark_3;

    if (region != "X") {
        switch (region) {
            case "A": totalMark += 2;
            case "B": totalMark += 1;
            case "C": totalMark += 0.5;
        }
    }

    if (object != 0) {
        switch (object) {
            case 1: totalMark += 2.5;
            case 2: totalMark += 1.5;
            case 3: totalMark += 1;
        }
    }

    return totalMark;
}