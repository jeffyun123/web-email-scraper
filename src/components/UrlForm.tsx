import { useState } from 'react';

function UrlForm() {
	const [url, setUrl] = useState('');

	const handleOnClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		console.log(url);
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	return (
		<div className="h-28 flex flex-col justify-center items-center m-auto space-y-3">
			<h2 className="text-xl">Enter a URL</h2>
			<input
				value={url}
				onChange={(e) => handleOnChange(e)}
				name="urlInput"
				className="border-[1px] font-normal border-neutral-100 py-1 px-2 rounded-xl text-center drop-shadow-md"
				placeholder="URL..."
			/>
			<button
				onClick={(e) => handleOnClick(e)}
				className="bg-[#046739] w-24 py-1.5 text-white rounded-lg drop-shadow-md hover:bg-[#153f2b] transition"
			>
				Search
			</button>
		</div>
	);
}

export default UrlForm;
