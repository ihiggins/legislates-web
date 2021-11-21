import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { sideNav } from '../../State/atoms';
import { useRecoilState } from 'recoil';

var Nav = () => {
	var [navState, setState] = useRecoilState(sideNav);

	var handleClick = () => {
		setState(!navState);
	};

	return (
		<div className='nav'>
			<IconButton
				aria-label='menu'
				color='inherit'
				size='large'
				onClick={handleClick}>
				<MenuRoundedIcon fontSize='inherit' color='inherit' />
			</IconButton>
			Legislative News
		</div>
	);
};

export default Nav;
