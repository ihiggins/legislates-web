import React from 'react';
import Nav from './Components/Nav/Nav';
import SideNav from './Components/Nav/SideNav';
import RssView from './Components/List/RssView';

import { Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Nav></Nav>
			<div className='layout'>
				<SideNav />

				<Routes>
					<Route path='/' element={<div> here?</div>} />

					<Route
						path='/president'
						element={
							<RssView
								title='Bills Presented to the President'
								desc="When a piece of legislation that requires the President's signature to become law passes Congress, this feed will alert you that the legislation has been submitted to the President for his or her signature."
								link='http://localhost:3000/public/president'
							/>
						}
					/>
					<Route
						path='/senate'
						element={
							<RssView
								title='On the Senate Floor Today.'
								desc='Legislation brought to the floor of the United States Senate.'
								link='https://www.congress.gov/rss/senate-floor-today.xml'
							/>
						}
					/>
					<Route
						path='/house'
						element={
							<RssView
								title='On the House Floor Today.'
								desc='Legislation brought to the floor of the United States House of Representatives.'
								link='https://www.congress.gov/rss/house-floor-today.xml'
							/>
						}
					/>
					<Route
						path='/bills'
						element={
							<RssView
								title='Congressional Bills.'
								desc='Provides access to newly published govinfo content from the Congressional Bills- Enrolled. Congressional bills are legislative proposals from the House of Representatives and Senate within the United States Congress.'
								link='https://www.govinfo.gov/rss/bills-enr.xml'
							/>
						}
					/>
					<Route
						path='/hearings'
						element={
							<RssView
								title='Congressional Hearings - New items on govinfo'
								desc='Provides access to newly published govinfo content from the Congressional Hearings. A hearing is a meeting or session of a Senate, House, joint, or special committee of Congress, usually open to the public, to obtain information and opinions on proposed legislation, conduct an investigation, or evaluate/oversee the activities of a government department or the implementation of a Federal law.'
								link='https://www.govinfo.gov/rss/chrg.xml'
							/>
						}
					/>

					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
