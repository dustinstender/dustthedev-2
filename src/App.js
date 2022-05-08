import './App.css';
import { Cartoon } from './components/Cartoon';
import { Words } from './components/Words';

function App() {
	return (
		<div className="home">
			<Words />
			<Cartoon />
		</div>
	);
}

export default App;
