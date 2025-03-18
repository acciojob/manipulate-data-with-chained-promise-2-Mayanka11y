//your JS code here. If required.
// Function to manipulate the array using chained promises
function manipulateArray() {
  const initialArray = [1, 2, 3, 4];
  const outputDiv = document.getElementById("output");

  // Initial promise that resolves after 3 seconds with the initial array
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialArray);
    }, 3000);
  })
    .then((array) => {
      // First transformation: Filter out odd numbers
      const evenNumbers = array.filter((num) => num % 2 === 0);
      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = evenNumbers.join(", ");
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // Second transformation: Multiply even numbers by 2
      const multipliedNumbers = evenNumbers.map((num) => num * 2);
      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = multipliedNumbers.join(", ");
          resolve(multipliedNumbers);
        }, 2000);
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// Call the function to start the process
manipulateArray();