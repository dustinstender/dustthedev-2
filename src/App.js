import './App.css';
import { useState } from 'react';
import { Cartoon } from './components/Cartoon';
import { Words } from './components/Words';

function App() {
	const [theme, setTheme] = useState('home');
	return (
		<div className={theme}>
			<div>
				<Words setTheme={setTheme} />
			</div>
			<div>
				<Cartoon />
			</div>
		</div>
	);
}

export default App;
