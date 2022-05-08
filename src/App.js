import './App.css';
import { Cartoon } from './components/Cartoon';
import { Words } from './components/Words';

function App() {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Words />
			<Cartoon />
		</div>
	);
}

export default App;
