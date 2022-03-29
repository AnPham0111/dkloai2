let a = +prompt('nhap a');
let b = +prompt('nhap b');
let c = +prompt('nhap c');
if (a<=0){
    alert('khong la tam giac');
}
else {
    if (b<=0){
        alert('khong la tam giac');
    }
    else {
        if (c<=0){
            alert('khong la tam giac');
        }
        else {
            if (c>=(a+b)){
                alert('khong la tam giac');
            }
            else {
                if (b>=(a+c)){
                    alert('khong la tam giac');
                }
                else {
                    if (a>=(b+c)){
                        alert('khong la tam giac');
                    }
                    else {
                        alert(' la tam giac');
                    }
                }
            }
        }
    }
}