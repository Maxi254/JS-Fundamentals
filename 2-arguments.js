// The total number of arguments in process.argv

let totalArgs = process.argv.length;

// subtract the two first processes because they just paths

let userArgCount = totalArgs - 2;

if (userArgCount === 0)
{
	console.log("No argument");
}
else if (userArgCount === 1);
{
	console.log("Argument found");
}
else
{
	console.log("Arguments found");
}
