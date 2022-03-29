let sodien = prompt('nhap so dien');
let a = parseFloat(sodien);
let S;
if (a<=0){
    alert('Tien dien la: 0' );
}
else {
    if (a<=50){
        S = a*1.484;
        alert('Tien dien la:' +S);
    }
    else {
        if (a<=100){
            S = 50*1.484+(a-50)*1.533;
            alert('Tien dien la:' +S);
        }
        else {
            if (a<=200){
                S = 50*(1.484+1.533)+(a-100)*1.786;
                alert('Tien dien la:' +S);
            }
            else {
                if (a<=300){
                    S=50*(1.484+1.533)+100*1.786+(a-200)*2.242;
                    alert('Tien dien la:' +S);
                }
                else {
                    if (a<=400){
                        S=50*(1.484+1.533)+100*(1.786+2.242)+(a-300)*2.503;
                        alert('Tien dien la:' +S);
                    }
                    else {
                        S = 50*(1.484+1.533)+100*(1.786+2.242+2.503)+(a-400)*2.587;
                        alert('Tien dien la:' +S);
                    }
                }
            }
        }
    }
}