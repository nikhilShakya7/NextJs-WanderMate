const Amadeus = require('amadeus');

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

export async function getCitySearch(query) {
  try {
    const response = await amadeus.referenceData.locations.get({
      keyword: query,
      subType: 'CITY',
    });
    return response.data;
  } catch (error) {
    console.error("Amadeus API Error:", error);
    return [];
  }
}