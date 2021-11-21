//@ts-nocheck

import { sideNav } from '../State/atoms';
import { useRecoilValue } from 'recoil';

var Layout = ({ children }) => {
	var leftState = useRecoilValue(sideNav);
	var active = '';
	if (leftState) {
		active += 'section-main-active-left';
	}
	return (
		<>
			<div className='layout'>
				<div className={leftState ? `lopen section-side` : `section-side`}>
					{children[0]}
				</div>

				<div className={`section-main ${active}`}>{children[1]}</div>
			</div>
		</>
	);
};

export default Layout;
