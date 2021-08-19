const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.splice(2);
const breedReq = args[0];

fetchBreedDescription(breedReq, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ',error);
  } else {
    console.log(desc);
  }
});
