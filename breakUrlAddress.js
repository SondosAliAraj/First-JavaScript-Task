let url = "https://www.microsoft.com/en-us/windows/get-windows-11";

function breakUrl(url) {
  var ArrayOfUrlParts = url.split("://"); // split the given string whenever '://' character occur to get the protocol part
  var protocol = ArrayOfUrlParts[0];
  ArrayOfUrlParts = ArrayOfUrlParts[1].split("/"); // split the rest of the url by '/'
  ArrayOfUrlParts.unshift(protocol); // add protocol part to the beginning of the array
  return ArrayOfUrlParts;
}

console.log("\n---------- The original url address ----------\n");
console.log(url + "\n");
console.log("\n---------- The array of splitted parts of url:----------\n");
console.log(breakUrl(url), "\n");
