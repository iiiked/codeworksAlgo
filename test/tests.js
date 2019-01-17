'use strict';

require('chai').should();
const expect = require('chai').expect;

const permutations = require('../index');
const mocks = require('./mocks');

describe('permutations', () => {

  it('Should return an array with one element', () => {
    permutations(mocks.caseOne).should.include.members(['a']);
  });

  it('Should return an array with two elements', () => {
    permutations(mocks.caseTwo).should.include.members(['ab', 'ba']);
  });

  it('Should return an array with many elements', () => {
    permutations(mocks.caseThree).should.include.members(['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba']);
  });

  it('Should return an array with one element', () => {
    permutations(mocks.caseFour).should.include.members(['aa']);
  });

  it('Should return an array with a bunch of elements', () => {
    permutations(mocks.caseFive).should.include.members(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
  });

  it('Should return an array with a bunch of elements', () => {
    permutations(mocks.caseSix).should.include.members(['aaaab', 'aaaba', 'aabaa', 'abaaa', 'baaaa']);
  });

  it('Should have no duplicates', () => {
    permutations(mocks.caseSix).should.have.lengthOf(5);
  });

  it('This is a test which always passes and is designed to give you a false confidence', () => {true});
});
