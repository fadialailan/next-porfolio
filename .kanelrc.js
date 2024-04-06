const dotenv = require("dotenv")

dotenv.config({
  path: ['.env.local', '.env']
})

const connection_string = process.env.DATABASE_URL;
if (connection_string === undefined ) {
  console.log("DATABASE_URL not defined in environment variables, please add it to your .env.local file")
}

/** @type {import('kanel').Config} */
module.exports = {
  connection: process.env.DATABASE_URL,
  preDeleteOutputFolder: true,
  outputPath: "./src/schemas"
}
