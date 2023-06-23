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
				You can see what I've been up to on{' '}
				<a
					target="_blank"
					href="https://github.com/dustinstender"
					rel="noreferrer"
				>
					GitHub.{' '}
				</a>
				You can find some skate videos on my{' '}
				<a
					target="_blank"
					href="https://www.youtube.com/channel/UCBHIfq8H3aqcuuLDzkUaTNw"
					rel="noreferrer"
				>
					Youtube.
				</a>
				<br></br>
				<br></br>
				<p style={{fontSize: 14}} >What I'm currently listening to:</p>
				{songData && <Spotify height={300} width={300} link={songData.external_urls.spotify} />}
			</p>
		</div>
	);
}
