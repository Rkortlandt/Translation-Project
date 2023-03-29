/**
 *
 * @param {*} number number to find closest multiple of
 * @param {*} multiple the multiple to use
 * @returns closest multiple of the number
 */
export default function closestNumber(number, gridSpacing) {
    let n = number;
    let m = 22 / gridSpacing;
    let q = Math.floor(n / m);
    let n1 = m * q;
    let n2 = (n * m) > 0 ?
        (m * (q + 1)) : (m * (q - 1));
    if (Math.abs(n - n1) < Math.abs(n - n2))
        return n1;
    return n2;
}
//# sourceMappingURL=SNAP.js.map