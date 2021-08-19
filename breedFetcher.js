const request = require('request');

const args = process.argv.splice(2);
const breedReq = args[0];
const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedReq}`;
request(website, (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  const data = JSON.parse(body);
  if (data[0] !== undefined && data[0].description !== undefined) {
    console.log(data[0].description);
    return data[0].description;
  }
  return console.log(`${breedReq} breed not found`);

});