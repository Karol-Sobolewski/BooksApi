const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if "Fullname" is not a string empty', () => {
        if(typeof fullname !== String) return 'Error';
        expect(formatFullname()).to.equal('Error');
        expect(formatFullname(20)).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });
    it('should return an error if "Fullname" is empty', () => {
        expect(formatFullname('')).to.equal('Error');
        expect(formatFullname(' ')).to.equal('Error');
    });
    it('should return an error if "FullName" does not have correct pattern', () => {
        expect(formatFullname('John Doe Test')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
    });
    it('should return proper value after parsing', () => {
        expect(formatFullname('JoHn Doe')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
    });

});