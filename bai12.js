let sotien = prompt('nhap so tien');
let laixuat = prompt('nhap lai hang thang');
let sothang = prompt('so thang gui');
let c = parseInt(sothang);
let a = parseFloat(sotien);
let b = parseFloat(laixuat);
let money = a*Math.pow((1+b),c)
alert('so tien thu duoc la: ' +money);