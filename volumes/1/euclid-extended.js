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

const exec = (c, d, a = 0, a_ = 1, b = 1, b_ = 0) => { // Initialize
    // Divide
    let q = Math.floor(c / d);
    let r = c % d;

    // Remainder zero?
    if (r === 0) return { a, b, d };

    // Recycle
    let t;
    c = d; d = r;
    t = a_; a_ = a; a = t - q*a;
    t = b_; b_ = b; b = t - q*b;

    return exec(c, d, a, a_, b, b_);
};

/* istanbul ignore next */
exports.usage = () => {
    const output = exports.name + '\n' + desc + '\n\neg: ' + sample + '\n20';
    console.log(output);
};
