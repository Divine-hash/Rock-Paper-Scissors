function computerPlay() {
  const arr = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * arr.length); // Generates number from 0 to array length - 1
  return arr[index];
}

