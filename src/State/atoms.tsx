import { atom } from 'recoil';

var init = window.innerWidth > 640;

export const sideNav = atom({
	key: 'sideNav',
	default: init
});
