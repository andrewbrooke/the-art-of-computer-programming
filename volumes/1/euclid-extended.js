exports.name = `Euclid's algorithm, extended (1.2E, Vol 1 pg. 13)`;

const desc = `Given two positive integers m and n, find their greatest common divisor d, and two not-necessarily-positive integers a and b such that am + bn = d.`; // eslint-disable-line
const sample = `node directory.js --volume 1 --program euclid-extended 20 100`;

/**
 * Euclid's algorithm, extended (1.2E, Vol 1 pg. 13)
 * Given two positive integers m and n, find their greatest common divisor d, and two not-necessarily-positive integers a and b such that am + bn = d.
 *
 * @param  {Number} m
 * @param  {Number} n
 * @return {Object} d, a, b
 */
exports.default = (m, n) => {
    if (!m) throw new Error('m is not defined');
    if (!n) throw new Error('n is not defined');

    console.log(`Input: m = ${m}, n = ${n}`);
    return exec(m, n);
};

const exec = (m, n) => {
    // Initialize
    let a1 = 1, b = 1;
    let a = 0, b1 = 0;
    let c = m, d = n;
    let t; // temp

    while (true) { // eslint-disable-line
        // Divide
        let q = Math.floor(c / d);
        let r = c % d;

        // Remainder zero?
        if (r === 0) break;

        // Recycle
        c = d; d = r;
        t = a1; a1 = a; a = t - q*a;
        t = b1; b1 = b; b = t - q*b;
    }

    return { a, b, d };
};

/* istanbul ignore next */
exports.usage = () => {
    const output = exports.name + '\n' + desc + '\n\neg: ' + sample + '\n20';
    console.log(output);
};
