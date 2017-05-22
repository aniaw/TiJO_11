'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('getDescendingNumbers', function (){
    it.only('should return string with numbers separated by spaces', function ()    {
        expect(app.getDescendingNumbers(15, 1)).to.eql('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
    });
    it('should return false if start greater than stop', function ()    {
        console.log('some text');
        expect(app.getDescendingNumbers(1, 15)).to.eql(false);
    });
    it('should return false if start equal stop', function ()    {
        expect(app.getDescendingNumbers(13, 13)).to.eql(false);
    });
    it.skip('should return false if start is string', function ()    {
        expect(app.getDescendingNumbers('asa', 1)).to.eql(false);
    });
    it('should ...', function ()
    {

    });
});
