const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  
  
  const website = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(website, (error, response, body) => {
    let err = null;
    let desc = null;
    if (error) {
      err = error;
      callback(err, desc);
      return;
    }
    const data = JSON.parse(body);
    if (data[0] !== undefined && data[0].description !== undefined) {
      desc = data[0].description;
    } else {
      err = `'${breed}' breed not found`;
    }
    callback(err, desc);
  });
  
};

module.exports = {fetchBreedDescription};