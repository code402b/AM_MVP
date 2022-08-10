const axios = require('axios');

const baseUrlMET = 'https://collectionapi.metmuseum.org/public/collection/v1/';

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

};
