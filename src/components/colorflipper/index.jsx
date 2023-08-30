import { useState } from 'react'
import '../../App.css'

const ColorFlipper = () => {

	const [activeTab, setActiveTab] = useState('simple')
	const [simpleColors, setSimpleColors] = useState('blue')
	const [hexColors, setHexColors] = useState('#0000FF')
	const colors = ['red', 'blue', 'green', 'indigo', 'orange', 'pink', 'yellow'];
	const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

	const changeSimpleColor = () => {
		let randomNumber = Math.floor(Math.random() * colors.length);
		setSimpleColors(colors[randomNumber])
	}

	const changeHexColor = () => {
		let color = '#';
		for (let i = 0; i < 6; i++) {
			let randomNumber = Math.floor(Math.random() * hexColors.length);
			color += hex[randomNumber]
		}
		setHexColors(color);

	}

	return (
		<div className='app'
			style={{
				backgroundColor: `${activeTab === 'simple' ? simpleColors : hexColors}`,
			}}
		>

			<nav className="navbar">
				<h3>Color Flipper</h3>
				<div className='flex tabs'>
					<p className={activeTab === 'simple' ? 'activeTab' : ''}
						onClick={() => setActiveTab('simple')}
					>
						Simple
					</p>
					<p
						className={activeTab === 'simple' ? '' : 'activeTab'}
						onClick={() => setActiveTab('hex')}
					>
						Hex

					</p>
				</div>
			</nav>

			<header className="app-header">
				<h3> Background Color:{' '}
					{activeTab === 'simple' ? simpleColors : hexColors}{' '}

				</h3>
				<div>
					{activeTab != 'simple' && (<button
						onClick={changeHexColor}
					>
						Change Color
					</button>
					)}
					{activeTab === 'simple' && (

						<button
							onClick={changeSimpleColor}
						>Change Color</button>
					)}
				</div>
			</header>
		</div>
	)
}

export default ColorFlipper