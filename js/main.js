/***
 * Khối 1: input
 * diemChuan
 * khuVuc
 * diemMon1
 * diemMon2
 * diemMon3
 * tongDiem
 * ketQua
 * 
 * Khối 2:
 * B1: lấy dữ liệu từ form
 * B2: lập công thức tính điểm
 * tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
 * B3: điều kiện 
 * -nếu diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0 && tongDiem >= diemChuan
 * => ketQua = "Bạn đã đậu. Tổng điểm"+ tongDiem
 * -nếu diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0
 * =>  ketQua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
 * B5: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnTuyenSinh").onclick = diemTuyenSinh;
function diemTuyenSinh(){
    var diemChuan = parseFloat(document.getElementById("inputDiemChuan").value);
    var khuVuc =parseFloat(document.getElementById("inputKhuVuc").value);
    var doiTuong =parseFloat(document.getElementById("inputDoiTuong").value);
    var diemMon1 =parseFloat(document.getElementById("inputDiem1").value);
    var diemMon2 =parseFloat(document.getElementById("inputDiem2").value);
    var diemMon3 =parseFloat(document.getElementById("inputDiem3").value);
    var ketQua = "";
    var tongDiem = 0;
    tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
    if(diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0 && tongDiem >= diemChuan){
      ketQua = "Bạn đã đậu. Tổng điểm: "+ tongDiem;
    }else if(diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0){
      ketQua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    }else{
        ketQua = "Bạn đã rớt. Tổng điểm: "+ tongDiem;
    }
    document.getElementById("txtTuyenSinh").innerHTML = ketQua;
}

/***
 * Khối 1: input
 * name
 * soKW
 * kwDoan1: 50kw đầu
 * kwDoan2: 50kw kế
 * kwDoan3: 100kw kế
 * kwDoan4: 100kw kế
 * kwDoan5: còn lại
 * tongTien
 * ketQua
 * 
 * Khối 2:
 * B1: lấy dữ liệu từ form
 * B2: điều kiện
 * -nếu soKW<=50
 * => tongTien = soKW*kwDoan1;
 * -nếu soKW>50 && soKW<=100
 * => tongTien = 50*kwDoan1 +(soKW-50)*kwDoan2;
 * -nếu soKW>100 && soKW<=200
 * => tongTien = 50*kwDoan1 + 50*kwDoan2 +(soKW-100)*kwDoan3
 * -nếu soKW>200 && soKW<=350
 * => tongTien = 50*kwDoan1 + 50*kwDoan2 + 100*kwDoan3 + (soKW-200)*kwDoan4
 * -nếu soKW>350
 * => tongTien = 50*kwDoan1 + 50*kwDoan2 + 100*kwDoan3 + 150*kwDoan4 + (soKW-350)*kwDoan5
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnTinhKW").onclick = tinhTienDien;
function tinhTienDien(){
    var name = document.getElementById("inputName").value;
    var soKW = parseFloat(document.getElementById("inputSoKW").value);
    const kwDoan1 = 500;
    const kwDoan2 = 650;
    const kwDoan3 = 850;
    const kwDoan4 = 1100;
    const kwDoan5 = 1300;
    var tongTien = 0;
    var ketQua = "";

    if(soKW<=50){
      tongTien = soKW*kwDoan1;
    }else if(soKW>50 && soKW<=100){
        tongTien = 50*kwDoan1 +(soKW-50)*kwDoan2;
    }else if(soKW>100 && soKW<=200){
        tongTien = 50*kwDoan1 + 50*kwDoan2 +(soKW-100)*kwDoan3;
    }else if(soKW>200 && soKW<=350){
        tongTien = 50*kwDoan1 + 50*kwDoan2 + 100*kwDoan3 + (soKW-200)*kwDoan4;
    }else if(soKW>350){
        tongTien = 50*kwDoan1 + 50*kwDoan2 + 100*kwDoan3 + 150*kwDoan4 + (soKW-350)*kwDoan5;
    }else{
        ketQua = "số kw không hợp lệ, vui lòng nhập lại";
    }
    ketQua = "Chủ hộ: " + name +"; Tiền điện: " + tongTien + "VND";
    document.getElementById("txtTinhKW").innerHTML = ketQua;
}

/***
 * Khối 1: input
 * name
 * tongThuNhap : tổng thu nhập năm
 * soNguoi : số người phụ thuộc
 * thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoi * 16e+5
 * bảng giá thuế : const ...
 * tongTien
 * ketQua
 * 
 * Khối 2:
 * B1: lấy dữ liệu từ form
 * B2: điều kiện
 * -nếu thuNhapChiuThue >=6e+6 && thuNhapChiuThue <= 60e+6
 * => tongTien = thuNhapChiuThue * THUE60 / 100
 * -nếu thuNhapChiuThue >60e+6 && thuNhapChiuThue <= 120e+6
 * => tongTien = thuNhapChiuThue * THUE60_120 / 100
 * -nếu thuNhapChiuThue >120e+6 && thuNhapChiuThue <= 210e+6
 * => tongTien = thuNhapChiuThue * THUE120_210 / 100
 * -nếu thuNhapChiuThue >210e+6 && thuNhapChiuThue <= 384e+6
 * => tongTien = thuNhapChiuThue * THUE210_384 / 100
 * -nếu thuNhapChiuThue >384e+6 && thuNhapChiuThue <= 624e+6
 * => tongTien = thuNhapChiuThue * THUE384_624 / 100
 * -thuNhapChiuThue >624e+6 && thuNhapChiuThue <= 960e+6
 * => tongTien = thuNhapChiuThue * THUE624_960 / 100
 * -nếu thuNhapChiuThue >960e+6
 * => tongTien = thuNhapChiuThue * THUETREN960 / 100
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnTinhThue").onclick = tinhTienThue;
function tinhTienThue(){
    var name = document.getElementById("inputTen").value;
    var tongThuNhap = parseFloat(document.getElementById("inputThuNhap").value);
    var soNguoi = parseInt(document.getElementById("inputSoNguoi").value);
    var tongTien = 0;
    var ketQua = "";
    var thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoi * 16e+5;
    const THUE60 = 5;
    const THUE60_120 = 10;
    const THUE120_210 = 15;
    const THUE210_384 = 20;
    const THUE384_624 = 25;
    const THUE624_960 = 30;
    const THUETREN960 = 35;

    if(thuNhapChiuThue >=6e+6 && thuNhapChiuThue <= 60e+6){
        tongTien = thuNhapChiuThue * THUE60 / 100;
    }else if(thuNhapChiuThue >60e+6 && thuNhapChiuThue <= 120e+6){
        tongTien = thuNhapChiuThue * THUE60_120 / 100;
    }else if(thuNhapChiuThue >120e+6 && thuNhapChiuThue <= 210e+6){
        tongTien = thuNhapChiuThue * THUE120_210 / 100;
    }else if(thuNhapChiuThue >210e+6 && thuNhapChiuThue <= 384e+6){
        tongTien = thuNhapChiuThue * THUE210_384 / 100;
    }else if(thuNhapChiuThue >384e+6 && thuNhapChiuThue <= 624e+6){
        tongTien = thuNhapChiuThue * THUE384_624 / 100;
    }else if(thuNhapChiuThue >624e+6 && thuNhapChiuThue <= 960e+6){
        tongTien = thuNhapChiuThue * THUE624_960 / 100;
    }else if(thuNhapChiuThue >960e+6){
        tongTien = thuNhapChiuThue * THUETREN960 / 100;
    }else{
        ketQua = alert("Số tiền thu nhập không hợp lệ");
    }
    ketQua = "Họ tên: " + name +"; Tiền thuế thu nhập cá nhân: " + tongTien +"VND"
    document.getElementById("txtTinhThue").innerHTML = ketQua;
}

/***
 * Khối 1: input
 * khachHang
 * maKhachHang
 * soKetNoi
 * soKenh
 * tienCap
 * ketQua
 * BILL_NHADAN : phí xử lý hóa đơn nhà dân
 * PRICE_NHADAN : phí dịch vụ cơ bản nhà dân
 * CHANNEL_NHADAN : thuê kênh cao cấp nhà dân
 * BILL_DOANHNGHIEP : phí xử lý hóa đơn doanh nghiệp
 * PRICE_DOANHNGHIEP : phí dịch vụ cơ bản doanh nghiệp
 * CHANNEL_DOANHNGHIEP : thuê kênh cao cấp doanh nghiệp
 * 
 * Khối 2:
 * B1: lấy dữ liệu từ form
 * B2: gắn sự kiện onchange cho loại khách hàng
 * -khi chọn gói doanh nghiệp 
 * => ô nhập số kết nối sẽ hiện lên
 * - khi chọn gói nhà dân
 * => ô nhập số kết nối sẽ ẩn xuống
 * B3: chọn loại khách hàng
 * B4: điều kiện
 * - nhà dân:
 * =>tienCap = BILL_NHADAN + PRICE_NHADAN + CHANNEL_NHADAN*soKenh;
 * -doanh nghiệp:
 * +soKetNoi>0 && soKetNoi<=10
 * =>tienCap = BILL_DOANHNGHIEP + PRICE_DOANHNGHIEP + CHANNEL_DOANHNGHIEP*soKenh
 * +soKetNoi>10
 * =>tienCap = BILL_DOANHNGHIEP + PRICE_DOANHNGHIEP + CHANNEL_DOANHNGHIEP*soKenh +(soKetNoi-10)*5
 * B5: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("inputKhachHang").onchange = myFunction;

function myFunction(){
    var x = document.getElementById("inputKhachHang").value;
    if(x == "doanhNghiep"){
        document.getElementById("soKetNoi").style.display = "block";
    }else{
        document.getElementById("soKetNoi").style.display = "none";
    }
}
document.getElementById("btnTinhCap").onclick = tinhTienCap;
function tinhTienCap(){
    var khachHang = document.getElementById("inputKhachHang").value;
    var maKhachHang = document.getElementById("inputMaKH").value;
    var soKetNoi = parseInt(document.getElementById("inputSoKetNoi").value);
    var soKenh = parseInt(document.getElementById("inputSoKenh").value);
    var tienCap = 0;
    var ketQua = "";

    const BILL_NHADAN = 4.5;
    const PRICE_NHADAN = 20.5;
    const CHANNEL_NHADAN = 7.5;
    const BILL_DOANHNGHIEP = 15;
    const PRICE_DOANHNGHIEP = 75;
    const CHANNEL_DOANHNGHIEP = 50;

    switch(khachHang){
        case "nhaDan": 
        tienCap = BILL_NHADAN + PRICE_NHADAN + CHANNEL_NHADAN*soKenh;
        break;
        case "doanhNghiep":
        if(soKetNoi>0 && soKetNoi<=10){
            tienCap = BILL_DOANHNGHIEP + PRICE_DOANHNGHIEP + CHANNEL_DOANHNGHIEP*soKenh;
        }else{
            tienCap = BILL_DOANHNGHIEP + PRICE_DOANHNGHIEP + CHANNEL_DOANHNGHIEP*soKenh +(soKetNoi-10)*5;
        }
        break;
        default:
            alert("hãy chọn loại khách hàng");
    }
    ketQua = "Mã khách hàng: "+ maKhachHang + "; Tiền cáp: "+tienCap+"$";
    document.getElementById("txtTinhCap").innerHTML = ketQua;
}
