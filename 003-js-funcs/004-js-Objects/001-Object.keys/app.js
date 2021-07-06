// Create an object with 3 keys.
const test = {"js": 1, "C#": 0, "GO": -1};
// ... Add one more key.
test["Java"] = 0;

// Get a key.
let result = Object.keys(test);

//range over the keys inside a loop.
for (var i = 0; i < result.length; i++) {
    console.log("KEY: " + result[i]);
}