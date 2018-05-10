exports.name = `Euclid's algorithm (1.1E, Vol 1 pg. 2)`;

const desc = `Given two positive integers m and n, find their greatest common divisor.`;
const sample = `node directory.js --volume 1 --program euclid 20 100`;

/**
 * Euclid's algorithm (1.1E, Vol 1 pg. 2)
 * Given two positive integers m and n, find their greatest common divisor.
 *
 * @param  {Number} m
 * @param  {Number} n
 * @return {Number} GCD of m and n
 */
exports.default = (m, n) => {
    if (!m) throw new Error('m is not defined');
    if (!n) throw new Error('n is not defined');

    console.log(`Input: m = ${m}, n = ${n}`);
    return exec(m, n);
};

const exec = (m, n) => {
    if (n === 0) return m;
    return exec(n, m % n);
};

/* istanbul ignore next */
exports.usage = () => {
    const output = exports.name + '\n' + desc + '\n\neg: ' + sample + '\n20';
    console.log(output);
};
