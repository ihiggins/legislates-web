import Element from './List/Element';
import { useFetch } from '../Hooks/useRss';
const AllView = () => {
	return (
		<div className='rss-view'>
			<div className='rss-inner'>
				<div className='rss-title'>
					<h1 className='rss-header'> Today in Congress</h1>
				</div>

				<RssViewSingle
					link='http://localhost:3000/public/president'
					title='Presidents desk'
					desc='the desc'
				/>
				<RssViewSingle
					link='http://localhost:3000/public/senate'
					title='On the Senate floor.'
					desc='the desc'
				/>
				<RssViewSingle
					link='http://localhost:3000/public/house'
					title='On the House floor'
					desc='the desc'
				/>
			</div>
		</div>
	);
};

var RssViewSingle = ({ link, title, desc }: props) => {
	const [error, loading, data] = useFetch(link);

	if (error) return <div>error</div>;
	if (loading) return <div>loading</div>;
	console.log(data);
	var bullets = [];
	for (var i = 0; i < data.length; i++) {
		bullets.push({
			pub: data[i].content,
			title: data[i].title,
			url: data[i].link
		});
	}
	console.log(bullets);

	return <Element title={title} content={desc} link={link} bullets={bullets} />;
};

interface props {
	link: string;
	title: string;
	desc: string;
}

export default AllView;
