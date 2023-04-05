let url = "https://www.microsoft.com/en-us/windows/get-windows-11";

function breakUrl(url) {
  var ArrayOfUrlParts = url.split("/"); // split the given string whenever '/' character occur
  ArrayOfUrlParts = ArrayOfUrlParts.filter((item) => item); // remove empty values from our array (if any)
  return ArrayOfUrlParts;
}

console.log("\n---------- The original url address ----------\n");
console.log(url + "\n");
console.log("\n---------- The array of splitted parts of url:----------\n");
console.log(breakUrl(url), "\n");
