const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

describe('smoke', () => {
  it('1 + 1 equals 2', () => {
    assert.equal(1 + 1, 2);
  });
});
