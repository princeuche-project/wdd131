function testGCD() {
    let x = -24;
    let y = 472;
    let divisor = gcd(x, y);
    // document.getElementById("divisor").innerHTML = divisor;
    console.log(divisor)

}

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    if (a < b) {
        let swap = a;
        a = b;
        b = swap
    }

    do {
        let r = a % b;
        a = b;
        b = r;
    }
    while (b != 0);
    return a;
}
testGCD();
