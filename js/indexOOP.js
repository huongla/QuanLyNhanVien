var nhanVien = new NhanVien();



document.getElementById('btnXacNhan').onclick = function(){
    nhanVien.maNhanVien = document.getElementById('maNhanVien').value;
    nhanVien.tenNhanVien = document.getElementById('tenNhanVien').value;
    nhanVien.chucVu = document.getElementById('chucVu').value;
    nhanVien.luongCoBan = document.getElementById('luongCoBan').value;
    nhanVien.gioLam = document.getElementById('gioLam').value;
    
    var dsTagOption = document.getElementById('chucVu').options;
    var viTriOptionDuocChon = document.getElementById('chucVu').selectedIndex;
    var tagOptionDuocChon = dsTagOption[viTriOptionDuocChon];

    console.log(nhanVien);
  
    //hiển thị thông tin
    document.getElementById('txtTenNhanVien').innerHTML = nhanVien.tenNhanVien;
    document.getElementById('txtMaNhanVien').innerHTML = nhanVien.maNhanVien;
    document.getElementById('txtChucVu').innerHTML = tagOptionDuocChon.innerHTML;
    document.getElementById('txtTongLuong').innerHTML = nhanVien.tinhLuong();
    document.getElementById('txtXepLoai').innerHTML = nhanVien.xepLoaiNV();

    
     
}


