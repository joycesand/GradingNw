const mark = require('../index')

// test ('testing the mark is a number',()=>{
//     // 
    
        
// });

test ('testing the mark is a number',()=>{
    expect (mark.isValidate()).toBe(true) ;
});

test ('testing if mark is A',()=>{
    expect(mark.computeGrade()).toBe ('C')
});