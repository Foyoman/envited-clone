import React from 'react';
import Typed from 'react-typed';
import camera from '../images/Camera.svg'

export default function Create() {
	return (
		<div className='create'>
			<div className='top-bar'>
				<p className='greyed'>Cancel</p>
				settings cog
			</div>
			<div className='create-event'>
				<h1>
					Create your {" "}
					<Typed
						className='typed'
						strings={[
							"movie night",
							"birthday party",
							"games night", 
							"picnic",
							"dinner",
							"house party",
							"lowkey gatho",
							"networking event",
							"drinks night"
						]}
						typeSpeed={50}
						backSpeed={20}
						backDelay={3000}
						loop
					/>
				</h1>
				<div className='side-by-side'>
					<form className='event-form'>
						<p>π My event is called</p>
						<input type="text" />

						<p>π It starts at</p>
						<input type="text" />

						<p>π It ends at <span className='optional'>(optional)</span></p>
						<input type="text" />

						<p>π Itβs happening at <span className='optional'>(optional)</span></p>
						<input type="text" />

						<p>π Add a URL link <span className='optional'>(optional)</span></p>
						<input type="text" />

						<p>βοΈ Description <span className='optional'>(optional)</span></p>
						<input type="text" />
					</form>
					<div className='image-placeholder'>
						<img src={ camera } alt="image placeholder" />
						<p style={{ fontWeight: 'bold', fontSize: '20px' }}>Choose a photo</p> 
					</div>
				</div>
				<a href="/event">
					<button className='gradient-button create-button'>
						π Create your event
					</button>
				</a>
			</div>
		</div >
	)
}
