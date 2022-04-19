function click(arg1) {
    console.log(arg1)
}

click(arg1);

// ReferenceError: arg1 is not defined
//     at Object.<anonymous> (/Users/nicolerosche/Documents/rocket/Aizat's Lesson/functions/function-argument-order-faiilure1.js:5:7)
//     at Module._compile (node:internal/modules/cjs/loader:1099:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:975:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47