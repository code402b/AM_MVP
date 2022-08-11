require('dotenv').config();
const axios = require('axios');

const baseUrlMET = 'https://collectionapi.metmuseum.org/public/collection/v1/';
const waltWhitmanBaseURL = 'https://pafmon-walt-whitman-poems.p.rapidapi.com/poems/';
const leavesOfGrassTitles = require('./APIdata.js').wwPoemNames;

module.exports = {
  getMETobject(req, res) {
    const randomID = Math.floor(Math.random() * 8000);
    const METObjectEndpoint = `${baseUrlMET}objects/${randomID}`;
    axios.get(METObjectEndpoint)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => console.log(err));
  },
  // relevant response values:
  // "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/L37147_2011_575_3ab.jpg",
  // "primaryImageSmall": "https://images.metmuseum.org/CRDImages/as/web-large/L37147_2011_575_3ab.jpg",
  // "objectName": "Scholar's rock",
  // "title": "Rock in the Form of a Fantastic Mountain",
  // "culture": "China",
  // "period": "Qing dynasty (1644–1911)",

  getMETquery(req, res) {
    // &isHighlight=true, returns objects marked as significant by the museum
    // const medium = req.body.medium || 'Paintings';
    const query = req.body.query || 'ocean';
    const METQueryEndpoint = `${baseUrlMET}search?hasImages=true&q=${query}`;
    const mediumEndpoint = `${baseUrlMET}search?hasImages=true&medium=Paintings&q=${query}`;
    axios.get(mediumEndpoint)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => console.log(err));
  },
  // returns array of object ids:
  // "total": 184,
  //  "objectIDs": [...ids]

  getWaltWhitmanPoem(req, res) {
    const randomIndex = Math.floor(Math.random() * 380);
    const title = leavesOfGrassTitles[randomIndex];
    const waltWhitmanPoemEndpoint = `${waltWhitmanBaseURL}${title}`;
    console.log('wwe:', waltWhitmanPoemEndpoint);
    axios.get(waltWhitmanPoemEndpoint, {
      headers: {
        'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.X_RAPID_API_HOST,
      },
    })
      .then(response => {
        console.log('data:', response.data);
        res.send(response.data);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  // "index": "poem-name",
  // "title": "Poem Name",
  // "text": "poem text"
};
