import { useState } from "react";
import { getRecentlyPlayedTrackData } from "../api/getRecentlyPlayedTrackData";
import { Spotify } from "react-spotify-embed";

export function Words() {

	const [songData, setSongData] = useState(undefined)

	const retrieveSongData = async () => {
		if (!songData) {
			try {
				const songData = await getRecentlyPlayedTrackData();
				setSongData(songData)
			
			  } catch (error) {
				console.error('Error retrieving song data:', error);
			  }
		}
	}

	retrieveSongData()

	return (
		<div className="words">
			<h1 className="h1">Hello, I'm Dustin.</h1>
			<p style={{ width: '400px' }}>
				You can see what I've been coding on{' '}
				<a
					href="https://github.com/dustinstender"
				>
					GitHub
				</a>.
				You can find some skate videos on my{' '}
				<a
					href="https://www.youtube.com/channel/UCBHIfq8H3aqcuuLDzkUaTNw"
				>
					Youtube
				</a>.
				<p style={{fontSize: 14, paddingTop: 5}} >What I'm currently listening to:</p>
				{songData && <Spotify wide link={songData.external_urls.spotify} />}
			</p>
		</div>
	);
}
