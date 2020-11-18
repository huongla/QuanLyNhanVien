var NhanVien = function(){
    this.maNhanVien = '',
    this.tenNhanVien ='',
    this.chucVu ='',
    this.luongCoBan ='',
    this.gioLam ='',
    this.tinhLuong = function(){
        if(this.chucVu === 1){
            return (Number(this.luongCoBan)*this.chucVu)
        }else if (this.chucVu === 2){
            return (Number(this.luongCoBan)*this.chucVu)
        }else {
            return (Number(this.luongCoBan)*this.chucVu)
        }
        
    },
    this.xepLoaiNV = function(){
        var xepLoai = '';
        if((Number(this.gioLam) >= 0) && (Number(this.gioLam) < 50) ){
            xepLoai = "Kém"
        }else if((Number(this.gioLam) >= 50) && (Number(this.gioLam) < 80) ){
             xepLoai = "Trung bình"
        }else if((Number(this.gioLam) >= 80) && (Number(this.gioLam) < 100) ){
             xepLoai = "Khá"
        }else if((Number(this.gioLam) >= 100) && (Number(this.gioLam) <120) ){
             xepLoai = "Giỏi"
        }else if((Number(this.gioLam) >= 120)){
             xepLoai = "Xuất sắc"
        }else{
             xepLoai ="Nhập sai thông tin"
        }
        return xepLoai;
    }
    
}