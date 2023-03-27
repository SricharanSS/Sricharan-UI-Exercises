
class Calculator {

    Add(a,b) {
        console.log(a+b);
    }

    Sub(a, b) {
        console.log(a-b);
    }
    
    Mul(a, b) {
        console.log(a*b);
    }
    
    Div(a, b) {
        console.log(a/b);
    }

}

let calculator = new Calculator();
calculator.Add(10,2);
calculator.Sub(10,2);
calculator.Mul(10,2);
calculator.Div(10,2);