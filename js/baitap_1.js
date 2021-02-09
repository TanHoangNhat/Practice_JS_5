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
    var region = document.getElementById("selectRegion").value;
    var object = parseInt(document.getElementById("selectObject").value);

    var result = "";
    var totalMark = 0;
    if (isNaN(standardPoint)) {
        result = "Vui lòng nhập điểm chuẩn!!!";
    } else if (standardPoint < 0 || standardPoint > 30) {
        result = "Điểm chuẩn tối thiểu là 0, tối đa là 30!!!";
    } else if (isNaN(mark_1)) {
        result = "Vui lòng nhập điểm môn 1!!!";
    } else if (mark_1 < 0 || mark_1 > 10) {
        result = "Điểm tối thiểu là 0, tối đa là 10!!!";
    } else if (isNaN(mark_2)) {
        result = "Vui lòng nhập điểm môn 2!!!";
    } else if (mark_2 < 0 || mark_2 > 10) {
        result = "Điểm tối thiểu là 0, tối đa là 10!!!";
    } else if (isNaN(mark_3)) {
        result = "Vui lòng nhập điểm môn 3!!!";
    } else if (mark_3 < 0 || mark_3 > 10) {
        result = "Điểm tối thiểu là 0, tối đa là 10!!!";
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
            case "A": totalMark += 2; break;
            case "B": totalMark += 1; break;
            case "C": totalMark += 0.5; break;
        }
    }

    if (object != 0) {
        switch (object) {
            case 1: totalMark += 2.5; break;
            case 2: totalMark += 1.5; break;
            case 3: totalMark += 1; break;
        }
    }

    return totalMark;
}