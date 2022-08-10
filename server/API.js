const axios = require('axios');

const baseUrlMET = 'https://collectionapi.metmuseum.org/public/collection/v1/';
const waltWhitmanBaseURL = 'https://pafmon-walt-whitman-poems.p.rapidapi.com/poems/';
const leavesOfGrassTitles = require('./APIdata.js');

module.exports = {

  getMETobject(id) {
    const METObjectEndpoint = `${baseUrlMET}objects/${id}`;
    axios.get(METObjectEndpoint);
  },

  // returns array of object ids:
  getMETquery(query, medium) {
    // &isHighlight=true, returns objects marked as significant by the museum
    let METQueryEndpoint = `
      ${baseUrlMET}search?
        hasImages=true
        &q=${query}
    `;
    if (medium) {
      METQueryEndpoint = `${METQueryEndpoint}&medium=${medium}`;
    }
    axios.get(METQueryEndpoint);
  },

  getWaltWhitmanPoem() {
    const randomIndex = Math.floor(Math.random() * 400);
    const title = leavesOfGrassTitles[randomIndex];
    const waltWhitmanPoemEndpoint = `${waltWhitmanBaseURL}${title}`;
    axios.get(waltWhitmanPoemEndpoint);
  },

};
