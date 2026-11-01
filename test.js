const add = require('./calculator');

const result = add(2, 3);
const expected = 5;

if (result === expected) {
    console.log('✅ Test passed!');
} else {
    console.error(`❌ Test failed! Expected ${expected}, got ${result}`);
    process.exit(1);
}
