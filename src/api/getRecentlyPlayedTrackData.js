
  
const getAccessToken = async () => {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET),
        },
        body: `grant_type=refresh_token&refresh_token=${process.env.REACT_APP_REFRESH_TOKEN}`,
        });

        const data = await response.json();

        return data.access_token;
    } catch (error) {
        console.error('Failed to fetch access token:', error);
        throw error;
    }
};

const getRecentlyPlayedTrack = async (accessToken) => {
    try {
        const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        });

        const data = await response.json();

        if (data && data.items && data.items.length > 0) {
        const track = data.items[0].track;
        return track;
        } else {
        console.log("No recently played tracks found.");
        return null;
        }
    } catch (error) {
        console.error('Failed to fetch recently played tracks:', error);
        throw error;
    }
};

export const getRecentlyPlayedTrackData = async () => {
    try {
      const accessToken = await getAccessToken();
      const track = await getRecentlyPlayedTrack(accessToken);
      return track;
    } catch (error) {
      console.error('Error retrieving recently played track data:', error);
      throw error;
    }
};

