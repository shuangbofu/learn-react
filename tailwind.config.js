module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		minHeight: {
			'24px': '24px',
			'28px': '28px',
			'30px': '30px',
		},
		// width: {
		// 	'100vh': '100vh',
		// },
		height: {
			// 'calc'
		},
		maxHeight: { '200px': '200px' },
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
