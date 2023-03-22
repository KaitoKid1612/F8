function Recursion(num) {
    if(num > 0) {
        return num * Recursion(num-1);
    }
    return 1;
}

console.log(Recursion(6));
