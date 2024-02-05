function sockMerchant(n, ar) {
    // Create a Map to store the count of each color
    const sockCount = new Map();
  
    // Count the occurrences of each color
    for (const color of ar) {
      sockCount.set(color, (sockCount.get(color) || 0) + 1);
    }
  
    // Count the number of pairs for each color
    let pairCount = 0;
    for (const count of sockCount.values()) {
      pairCount += Math.floor(count / 2);
    }
  
    return pairCount;
  }

  const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// Sample Output
const result = sockMerchant(n, ar);
console.log(result);