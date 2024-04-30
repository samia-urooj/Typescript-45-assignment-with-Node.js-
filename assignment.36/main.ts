function make_shirt(size: string, message: string) {
  return `You selected ${size} size shirt with ${message} prints on it.`;
}

let result = make_shirt("Medium", "Love yourself!");
console.log(result);
