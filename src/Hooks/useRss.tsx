import { useEffect, useState } from 'react';

let Parser = require('rss-parser');
let parser = new Parser();

function useFetch(link: string) {
	const [data, setData] = useState<rss[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(link)
			.then((response) => response.json())
			.then((data) => {
				setLoading(false);
				setData(data);
			})
			.catch((e: any) => {
				setLoading(false);
				setError(true);
			});
	}, [link]);

	return [error, loading, data] as const;
}

export { useFetch };

// interface Idata {

// }

type rss = {
	content: string;
	contentSnippet: string;
	guid: string;
	link: string;
	title: string;
	news: any[];
};
