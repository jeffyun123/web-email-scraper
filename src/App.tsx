import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Output from './components/Output';
import UrlForm from './components/UrlForm';

function App() {
	const [url, setUrl] = useState('');

	return (
		<div className="font-[Poppins] min-h-screen text-white flex flex-col ">
			<Header />
			<main className="text-neutral-800 font-bold my-12">
				<UrlForm setUrl={setUrl} />
				<Output />
			</main>
			<Footer />
		</div>
	);
}

export default App;
