const CButton = props => {
	return (
		<div
			onClick={props.onClick}
			className=" relative whitespace-pre w-full cursor-pointer border border-gray-400 px-4 py-1.5 hover:bg-gray-200 shadow"
		>
			{props.children}
		</div>
	)
}

export default CButton
