import { getCitySearch } from '@/lib/amadeusService';
import { fetchWeatherData } from '@/lib/weatherService';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('search');

  try {
    const cities = await getCitySearch(query || '');
    
    const enrichedDestinations = await Promise.all(
      cities.map(async (city) => {
        const weather = await fetchWeatherData(city.geoCode.latitude, city.geoCode.longitude);
        return {
          id: city.id,
          name: city.name,
          geoCode: city.geoCode,
          weather,
        };
      })
    );

    return Response.json(enrichedDestinations);
  } catch (error) {
    return Response.json({ error: "Failed to fetch destinations" }, { status: 500 });
  }
}