const StringBuilder = require('./string-builder');
const {expect} = require('chai');

describe('constructor tests', () => {

    it('should behave correctly when given string in the constructor', () => {
        expect(new StringBuilder ('hello').toString()).to.be.equal('hello');
    });

    it('should behave correctly when given empty string in the constructor', () => {
        expect(new StringBuilder ('').toString()).to.be.equal('');
    });

    it('should throw error when given number in the constructor', () => {
        expect(() => new StringBuilder(1).toString()).to.throw('Argument must be a string');
    });

    it('should throw error when given null in the constructor', () => {
        expect(() => new StringBuilder(null).toString()).to.throw('Argument must be a string');
    });

    it('should behave correctly when given undefined in the constructor', () => {
        expect(new StringBuilder(undefined).toString()).to.be.equal('');
    });

    it('should throw error when given boolean in the constructor', () => {
        expect(() => new StringBuilder(true).toString()).to.throw('Argument must be a string');
    });

    it('should throw error when given array in the constructor', () => {
        expect(() => new StringBuilder(['a','b','c']).toString()).to.throw('Argument must be a string');
    });

    it('should throw error when given object in the constructor', () => {
        expect(() => new StringBuilder({}).toString()).to.throw('Argument must be a string');
    });



});

describe('append function tests', () => {

    it('should throw error when given invalid arguments', () =>{
        const example = new StringBuilder('hello,');
        expect(() => example.append(10)).to.throw('Argument must be a string');
        expect(() => example.append([10])).to.throw('Argument must be a string');
        expect(() => example.append({})).to.throw('Argument must be a string');
        expect(() => example.append(false)).to.throw('Argument must be a string');
    });

    it('should add at the end of the storage ', () =>{
        const example = new StringBuilder('hello,');
        example.append(' there');
        expect(example.toString()).to.be.equal('hello, there');
    });
});

describe('prepend function tests', () => {
    
    it('should throw error when given invalid arguments', () =>{
        const example = new StringBuilder('hello,');
        expect(() => example.prepend(10)).to.throw('Argument must be a string');
        expect(() => example.prepend([10])).to.throw('Argument must be a string');
        expect(() => example.prepend({})).to.throw('Argument must be a string');
        expect(() => example.prepend(false)).to.throw('Argument must be a string');
    });

    it('should add at the end of the storage ', () =>{
        const example = new StringBuilder('hello');
        example.prepend('So, ');
        expect(example.toString()).to.be.equal('So, hello');
    });
  

});

describe('insertAt function tests', () => {

    it('should throw error when given invalid arguments', () =>{
        const example = new StringBuilder('hello,');
        
        expect(() => example.insertAt(1,10)).to.throw(Error);
        expect(() => example.insertAt([1],10)).to.throw(Error);
        expect(() => example.insertAt({1:10})).to.throw(Error);

    });

    it('should add string at the correct index', () => {
        const example = new StringBuilder('hello,');
        example.insertAt('friend', 6)
        expect(example.toString()).to.be.equal('hello,friend')
    });


});

describe('remove function tests', () => {

    it('should remove characters from the string', () =>{
        const example = new StringBuilder('hello,');
        example.remove(0,4);
        expect(example.toString()).to.be.equal('o,');
    });
});

describe('toString function tests', () => {

    it('should behave correctly when given valid string arguments', () =>{
        const example = new StringBuilder('hello');
        example.append(', there');
        example.prepend('User, ');
        example.insertAt('woop',5 ); 
        example.remove(6, 3); 
        expect(example.toString()).to.be.equal('User,w hello, there')
    });

    
});