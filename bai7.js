let a = +prompt('nhap a');
let b = +prompt('nhap b');
let c = +prompt(' nhap c');
let d,x1,x2 ;
if (a == 0){
    alert('Khong la pt bac 2')
}
else {
    d = b*b-4*a*c;
    if (d < 0){
        alert('pt vn');
    }
    else {
        alert('x1 la' +(-b+Math.sqrt(d))/(2*a))
        alert('x2 la' +(-b-Math.sqrt(d))/(2*a))
    }
}
