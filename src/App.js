import { useEffect, useState } from 'react';
import './App.css';
import { css } from '@emotion/css';
import { Cartoon } from './components/Cartoon';
import { Words } from './components/Words';

function App() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		// Update the window width state when the window is resized
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	if (windowWidth < 800) {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<Words />
			</div>
		);
	}

	return (
		<div
			className={css`
				background-image: linear-gradient(
					105deg,
					#f4f4f4 75%,
					#22313f calc(75% + 2px)
				);
				height: 100vh;
				display: flex;
				align-items: center;
				justify-content: center;
			`}
		>
			<div>
				<Words isWideScreen={true} />
			</div>
			<div>
				<Cartoon />
			</div>
		</div>
	);
}

export default App;
