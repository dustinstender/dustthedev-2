import { useState } from 'react';
import { getRecentlyPlayedTrackData } from '../api/getRecentlyPlayedTrackData';
import { Spotify } from 'react-spotify-embed';
import { css } from '@emotion/css';

export function Words({ isWideScreen }) {
	const [songData, setSongData] = useState(undefined);

	const retrieveSongData = async () => {
		if (!songData) {
			try {
				const songData = await getRecentlyPlayedTrackData();
				setSongData(songData);
			} catch (error) {
				console.error('Error retrieving song data:', error);
			}
		}
	};

	retrieveSongData();

	return (
		<div style={{ paddingRight: isWideScreen ? '50%' : '' }}>
			<h1
				className={
					isWideScreen
						? css`
								color: #22313f;
								font-family: 'Roboto', sans-serif;
								font-size: 4em;
								width: 100%;
						  `
						: css`
								color: #22313f;
								font-family: 'Roboto', sans-serif;
								font-size: 2em;
						  `
				}
			>
				Hello, I'm Dustin.
			</h1>
			<p style={{ width: isWideScreen ? 400 : 250 }}>
				You can see what I've been coding on{' '}
				<a href="https://github.com/dustinstender">GitHub</a>. You can find some
				skate videos on my{' '}
				<a href="https://www.youtube.com/channel/UCBHIfq8H3aqcuuLDzkUaTNw">
					Youtube
				</a>
				.
				<p style={{ fontSize: 14, paddingTop: 5 }}>
					What I'm currently listening to:
				</p>
				{songData && (
					<Spotify
						wide
						width={isWideScreen ? 300 : 250}
						link={songData.external_urls.spotify}
					/>
				)}
			</p>
		</div>
	);
}
