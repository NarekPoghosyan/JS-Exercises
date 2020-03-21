// Xndir 6 Fibonachi
let a = +prompt('gri tiv');
let n1 = 0;
let n2 = 1;
for(let i = 1; i <= a; i++) {
    if (n1 + n2 == i) {
        alert(i);
        n1 = n2;
        n2 = i;
    }  
}