var assert = require('assert');
var math = require('../../../../index');
var Fraction = require('fraction.js');

describe('fraction', function () {

  it('should create a fraction', function () {
    equalFraction(math.fraction(1,3), new Fraction(1, 3));
    equalFraction(math.fraction(0.3), new Fraction(0.3));
    equalFraction(math.fraction('1/3'), new Fraction(1,3));
    equalFraction(math.fraction({n: 1, d: 3}), new Fraction(1,3));
  });

  it('should create a fraction for all elements in an array', function () {
    var arr = math.fraction([0.2, 0.25, 0.125]);
    assert(Array.isArray(arr));
    assert.equal(arr.length, 3);

    equalFraction(arr[0], new Fraction(1, 5));
    equalFraction(arr[1], new Fraction(1, 4));
    equalFraction(arr[2], new Fraction(1, 8));
  });

  it('should create a fraction for all elements in a Matrix', function () {
    var mat = math.fraction(math.matrix([0.2, 0.25, 0.125]));
    assert.strictEqual(mat.isMatrix, true);

    var arr = mat.toArray();
    equalFraction(arr[0], new Fraction(1, 5));
    equalFraction(arr[1], new Fraction(1, 4));
    equalFraction(arr[2], new Fraction(1, 8));
  });

});

function equalFraction (a, b) {
  var msg = a.toString() + ' !== ' + b.toString();
  assert.strictEqual(a.s, b.s, msg);
  assert.strictEqual(a.n, b.n, msg);
  assert.strictEqual(a.d, b.d, msg);
}