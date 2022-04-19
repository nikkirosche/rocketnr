function click(arg1, arg2) {
    console.log(arg2)
}

const arg1 = "This will never be printed"
const arg2 = "Hello World"

// argument order/position is very important
// javascript does not have named arugments
click(arg2, arg1);
