const axios = require('axios');

const baseUrlMET = 'https://collectionapi.metmuseum.org/public/collection/v1/';
const waltWhitmanBaseURL = 'https://pafmon-walt-whitman-poems.p.rapidapi.com/poems/';
const leavesOfGrassTitles = require('./APIdata.js');

module.exports = {
  getMETobject(id) {
    const METObjectEndpoint = `${baseUrlMET}objects/${id}`;
    axios.get(METObjectEndpoint);
  },
  // relevant response values:
  // "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/L37147_2011_575_3ab.jpg",
  // "primaryImageSmall": "https://images.metmuseum.org/CRDImages/as/web-large/L37147_2011_575_3ab.jpg",
  // "objectName": "Scholar's rock",
  // "title": "Rock in the Form of a Fantastic Mountain",
  // "culture": "China",
  // "period": "Qing dynasty (1644–1911)",

  getMETquery(query, medium) {
    // &isHighlight=true, returns objects marked as significant by the museum
    const METQueryEndpoint = medium
      ? `${baseUrlMET}search?hasImages=true&medium=${medium}&q=${query}`
      : `${baseUrlMET}search?hasImages=true&q=${query}`;
    axios.get(METQueryEndpoint);
  },
  // returns array of object ids:
  // "total": 184,
  //  "objectIDs": [...ids]

  getWaltWhitmanPoem() {
    const randomIndex = Math.floor(Math.random() * 400);
    const title = leavesOfGrassTitles[randomIndex];
    const waltWhitmanPoemEndpoint = `${waltWhitmanBaseURL}${title}`;
    axios.get(waltWhitmanPoemEndpoint);
  },

  // "index": "poem-name",
  // "title": "Poem Name",
  // "text": "poem text"
};
