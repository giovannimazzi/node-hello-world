const fs = require("fs");

const packageJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
const authorInfo = packageJson.author.split("<");

console.log(`
    
Hello Booleaner: ${process.argv[2]}

The author is: ${authorInfo[0]}
and his email is: "${authorInfo[1].slice(0, -1)}"

`);
