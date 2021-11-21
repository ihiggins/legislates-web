import parse from 'html-react-parser';
import { useEffect, useState } from 'react';

var Element = ({ title, content, link, bullets }: props) => {
	const [shown, setShown] = useState(0);

	useEffect(() => {
		if (!bullets) return;
		setShown(randInt(1, bullets.length));
	}, []);

	var items = [];

	for (var i = 0; i < shown; i++) {
		items.push(
			<Bullet
				//@ts-ignore
				pub={bullets[i].pub}
				//@ts-ignore
				time={bullets[i].time}
				//@ts-ignore
				title={bullets[i].title}
				//@ts-ignore
				url={bullets[i].url}
			/>
		);
	}

	return (
		<div className='element'>
			<h2 className='element-title'>{title}</h2>
			<p className='element-content'>{content}</p>
			{shown !== 0 && <ul className='bullet-list'>{items}</ul>}
			<a className='element-link' href={link}>
				View
			</a>
		</div>
	);
};

export default Element;

interface props {
	title: string;
	content: string;
	link: string;
	bullets?: bullet[];
}

type bullet = {
	pub: string;
	time: string;
	title: string;
	url: string;
};

var Bullet = ({ title, pub, time, url }: bullet) => {
	return (
		<li className='bullet'>
			<a className='bullet-link' href={url}>
				<p className='bullet-title'>{title}</p>
				<span className='bullet-sub'>
					{pub} ~ {time}
				</span>
			</a>
		</li>
	);
};

function randInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
