import add from './function';

add.test = function (describe, it, assert) {
  describe('数字加法', function () {
    // test 1
    it('1 + 1 === 2', function () {
      assert.equal(add(1, 1), 2);
    });
    // test 2
    it('1 + 2 === 3', function () {
      assert.equal(add(1, 2), 3);
    });
  });
};

export default add;
