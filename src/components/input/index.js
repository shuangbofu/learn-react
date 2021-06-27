const CInput = props => {
	const { placeholder, onChange } = props
	return (
		<input
			className="outline-none px-2 py-1 
    text-base border border-gray-400 shadow 
    text-gray-600 rounded-sm"
			placeholder={placeholder}
			onChange={i => onChange(i.target.value)}
		/>
	)
}
export default CInput
