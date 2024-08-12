function fibonacci(num) {
    if (num === 1) return 0; // The 1st Fibonacci number is 0
    if (num === 2) return 1; // The 2nd Fibonacci number is 1
    
    let a = 0, b = 1, next;
    
    for (let i = 3; i <= num; i++) { // Start from the 3rd Fibonacci number
        next = a + b;
        a = b;
        b = next;
    }
    
    return b;
}

module.exports = fibonacci;
