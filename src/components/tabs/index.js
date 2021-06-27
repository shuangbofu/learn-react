const CTabs = props => {
	const { options, outClassName, cur, onChange } = props

	return (
		<div
			className={` flex shadow border border-gray-400 relative w-full overflow-auto ${outClassName}`}
		>
			{options.map(i => {
				return (
					<div
						onClick={() => onChange(i.value)}
						key={i.value}
						className={`px-3 py-2 mr-2 border-b-2 border-white whitespace-pre cursor-pointer ${
							cur === i.value ? 'border-blue-500' : ''
						}`}
					>
						{i.label}
					</div>
				)
			})}
		</div>
	)
}

export default CTabs
