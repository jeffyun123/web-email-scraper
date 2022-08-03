import { useState, useEffect } from 'react';

function useFetch(url: string) {
	const [data, setData] = useState<any | null>(null);

	useEffect(() => {
		const abortController = new AbortController();

		fetch(url, { signal: abortController.signal })
			.then((res) => res.text())
			.then((html) => {
				const parser = new DOMParser();

				const doc = parser.parseFromString(html, 'text/html');
				console.log(doc);
			})
			.catch((err) => {
				console.error(`Caught something: ${err}`);
			});

		return () => {
			abortController.abort();
		};
	}, [url]);

	return { data };
}

export default useFetch;
