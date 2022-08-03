import { useState } from 'react';

interface Props {
	setUrl: React.Dispatch<React.SetStateAction<string>>;
}

function UrlForm({ setUrl }: Props) {
	const [inputValue, setInputValue] = useState('');

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const targetValue = e.target.value;

		setInputValue(targetValue);
	};

	const handleOnSubmit = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		console.log(`Setting URL as ${inputValue}`);
		setUrl(inputValue);
	};
	return (
		<div className="h-28 flex flex-col justify-center items-center m-auto space-y-3">
			<h2 className="text-xl">Enter a URL</h2>
			<input
				value={inputValue}
				onChange={(e) => handleOnChange(e)}
				name="urlInput"
				className="border-[1px] font-normal border-neutral-100 py-1 px-2 rounded-xl text-center drop-shadow-md"
				placeholder="URL..."
			/>
			<button
				onClick={(e) => handleOnSubmit(e)}
				className="bg-[#046739] w-24 py-1.5 text-white rounded-lg drop-shadow-md hover:bg-[#153f2b] transition"
			>
				Search
			</button>
		</div>
	);
}

export default UrlForm;
