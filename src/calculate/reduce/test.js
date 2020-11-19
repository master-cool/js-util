import reduce from './function';

reduce.test = function (describe, it, assert) {
  describe('数字减法', function () {
    // test 1
    it('1 - 1 === 0', function () {
      assert.equal(reduce(1, 1), 0);
    });
    // test 2
    it('1 - 2 === -1', function () {
      assert.equal(reduce(1, 2), -1);
    });
  });
};

export default reduce;
