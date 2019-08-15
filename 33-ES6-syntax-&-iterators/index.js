







//Variable scope
let text = "062419"

function x(){
    // console.log("I am in x function",text)
    let a = "Am I available?"
    console.log("A from x function", a)

    function test(){
    console.log("A from test function", a)
    }

    test()
}

function y(){
    // console.log("I am in y function",text)
    x()
    console.log("A displayed y function", a)

}



x()
y()

console.log("A displayed outside of function", a)
