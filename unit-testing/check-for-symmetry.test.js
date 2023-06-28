const isSymmetric = require('./check-for-symmetry');
const {assert} = require('chai');

describe('isSymmetric function tests', () =>{
    

    it('should return false when input is not an array', ()=>{
        assert.isNotArray(isSymmetric(1,2,3));
    });

     it('should return true when given symemtric integer array', ()=>{
        assert.isTrue(isSymmetric([1,2,1]));
    });

    it('should return true when given symemtric string array', ()=>{
        assert.isTrue(isSymmetric(['a','b', 'a']));
    });

      it('should return false when given asymemtric integer array', ()=>{
        assert.isFalse(isSymmetric([1,2,3]));
    });

       it('should return false when given asymemtric string array', ()=>{
        assert.isFalse(isSymmetric(['a','b','c']));
    });


    



});