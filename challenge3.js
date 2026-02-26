let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
        evenCount++;
    } else {
        console.log(`${i} is odd`)
        oddCount++;
    }
}

// Final summary log
console.log(`\nSummary:`);
console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);