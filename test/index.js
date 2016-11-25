'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');

/**
 * Index.
 */
describe('index', function() {
    it('exports an object', function() {
        assert.equal(require('../index').constructor, Object);
    });
});
