import { useEffect, useState } from 'react';
import { useFetch } from '../../Hooks/useRss';
import Element from './Element';

var RssView = ({ link, title, desc }: props) => {
	const [error, loading, data] = useFetch(link);

	if (error) return <div>error</div>;
	if (loading) return <div>loading</div>;

	console.log(data);

	var items = [];
	for (var i in data) {
		items.push(
			<Element
				key={i}
				title={data[i].title}
				content={data[i].content}
				link={data[i].link}
				bullets={data[i].news}
			/>
		);
	}

	return (
		<div className='rss-view'>
			<div className='rss-inner'>
				<div className='rss-title'>
					<h1 className='rss-header'> {title}</h1>
					<h2 className='rss-desc'>{desc}</h2>
				</div>

				{items}
			</div>
		</div>
	);
};

export default RssView;

interface props {
	link: string;
	title: string;
	desc: string;
}
