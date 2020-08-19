const{add,subtract,multiply,divide,equal,clearAllfields}=require("./calculator");


describe("valid addition",()=>{
    test("4+1=5",()=>{
        expect(add(4,1)).toEqual(5);
    });
    test("(-1)+20=19",()=>{
        expect(add((-1),20)).toEqual(19);
    });
    test("(0.02)+1=1.02",()=>{
        expect(add((0.02),1)).toEqual(1.02);
});
});

describe("valid subtraction",()=>{
    test("3-1=2",()=>{
        expect(subtract(3,1)).toEqual(2);
    });
    test("-20-5=-25",()=>{
        expect(subtract(-20,5)).toEqual(-25);
    });
    test("1.02-1=0.02",()=>{
        expect(subtract(1.02,1)).toBeCloseTo(0.02);
});
});

describe("valid multiply",()=>{
   
    test('"3"*"4"=12',()=>{
        expect(multiply("3","4")).toBe(12);
    });
    test("3*5=15",()=>{
        expect(multiply(3,5)).toEqual(15);
    });
    test("0.6*0.2=0.12",()=>{
        expect(multiply(0.6,0.2)).toBe(0.12);
});


});

describe("valid divide",()=>{
    let x="";
    let y="";
    let division=divide(x/4)||divide(4/y);
     test("x/y=Invalid",()=>{
         expect(divide(x/y)).toBe("Invalid");
     });
     test("3/3=1",()=>{
         expect(divide(3,3)).toEqual(1);
     });
     test("1/0=error",()=>{
         expect(divide(1,0)).toBe("error");
 });
});
describe("equal",()=>{
    test("5===5",()=>{
        expect((5,5)).toBe(5);
    });
    test("0===0",()=>{
        expect((0,0)).toBe(0);
    });
});

describe("valid clear all fields", () => {
    test("number, operator, number, AC", () => {
        expect(clearAllfields(10, add(), 20, clearAllfields)).toEqual(0);
      });
    test("number, operator, AC", () => {
        expect(clearAllfields(10, add(), clearAllfields)).toEqual(0);
      });
});

    



