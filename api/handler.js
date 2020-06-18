'use strict';
const utils = require('serverless-toolset');
const fetch = require('node-fetch');

module.exports.marsPhotos = async event => {
  try{

    utils.log("Request received",event);
    const date = utils.parseQueryParams(event).date;
    const apiKey = process.env.NASA_API_KEY;;

    utils.log("Date for request: "+date,{apiKey});
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    utils.log("Response from NASA",data);
    return utils.buildResponse(200,data);

  }
  catch(error){

    utils.log("An error occurred: "+error,error,"error");
    return utils.buildResponse(500,error);

  }
};
