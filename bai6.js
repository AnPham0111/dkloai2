let a = prompt('nhap a');
let b = prompt(' nhap b');
if(a == 0 ){
    if (b == 0){
        alert('pt vsn');
    }
    else {
        alert('pt vn');
    }
}else {
    alert('pt co nghiem la ' +(-b/a))
}