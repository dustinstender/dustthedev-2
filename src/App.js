import './App.css';
import { Cartoon } from './components/Cartoon';
import { Words } from './components/Words';

function App() {
	return (
		<div className='home'>
			<div>
				<Words />
			</div>
			<div>
				<Cartoon />
			</div>
		</div>
	);
}

export default App;
