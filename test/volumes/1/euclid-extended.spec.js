const assert = require('chai').assert;

const euclidExtended = require('../../../volumes/1/euclid-extended').default;

describe(`Euclid's Algorithm, Extended`, () => {
    it('Should throw error when m not defined', (done) => {
        try {
            euclidExtended();
        } catch (err) {
            assert.equal(err.message, 'm is not defined');
        }

        done();
    });

    it('Should throw error when n not defined', (done) => {
        try {
            euclidExtended(13);
        } catch (err) {
            assert.equal(err.message, 'n is not defined');
        }

        done();
    });

    it('Should find d (GCD), a, and b of m = 1769, n = 551 to be 29, 5, -16', (done) => {
        const result = euclidExtended(1769, 551);
        assert.equal(result.d, 29);
        assert.equal(result.a, 5);
        assert.equal(result.b, -16);

        done();
    });
});
