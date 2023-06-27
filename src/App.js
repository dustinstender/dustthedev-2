import { useEffect, useState } from 'react';
import './App.css';
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
		<div className="home">
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
