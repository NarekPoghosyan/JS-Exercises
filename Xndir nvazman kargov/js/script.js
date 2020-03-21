//  Xndir 4 
let a = +prompt('greq arajin tiv');
let b = +prompt('greq erkrord tiv');
let c = +prompt('greq errord tiv');
if (a > b && a > c && b > c) {
    document.write(a,b,c); }
    else if (a > b && a > c && b < c ) {
        document.write(a,c,b);
    } else if (b > a && b > c && a > c) {
        document.write(b,a,c);
    } else if (b > a && b > c && a < c) {
        document.write(b,c,a);
    } else if (c > a && c > b && b > a) {
        document.write(c,b,a);
    } else document.write(c,a,b);