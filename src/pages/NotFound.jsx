import React from 'react'
import '@styles/NotFound.scss'

const NotFound = () => {
	return (
		<div className='notfound-container'>
			<div className="container">
			<p>ERROR 404</p>
			<h1>Oops!</h1>
			<h2>It seems that you landed on a page that does not exist!</h2>
			<a href="/" className='return-button'> Bring me back to home</a>
			</div>
		</div>
	);
}

export default NotFound;