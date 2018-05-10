const assert = require('chai').assert;

const euclid = require('../../../volumes/1/euclid').default;

describe(`Euclid's Algorithm`, () => {
    it('Should throw error when m not defined', (done) => {
        try {
            euclid();
        } catch (err) {
            assert.equal(err.message, 'm is not defined');
        }

        done();
    });

    it('Should throw error when n not defined', (done) => {
        try {
            euclid(13);
        } catch (err) {
            assert.equal(err.message, 'n is not defined');
        }

        done();
    });

    it('Should find GCD of m = 13, n = 13 to be 13', (done) => {
        const gcd = euclid(13, 13);
        assert.equal(gcd, 13);

        done();
    });

    it('Should find GCD of m = 37, n = 600 to be 1', (done) => {
        const gcd = euclid(37, 600);
        assert.equal(gcd, 1);

        done();
    });

    it('Should find GCD of m = 20, n = 100 to be 20', (done) => {
        const gcd = euclid(20, 100);
        assert.equal(gcd, 20);

        done();
    });

    it('Should find GCD of m = 624129, n = 2061517 to be 18913', (done) => {
        const gcd = euclid(624129, 2061517);
        assert.equal(gcd, 18913);

        done();
    });
});
