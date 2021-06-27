import { useState } from 'react'

const CSelect = props => {
	const { onChange, value, options, outClassName, multiple } = props

	const [optionVisible, setOptionVisible] = useState(false)

	const isArray = value instanceof Array
	const arrValue = isArray ? value : null
	const showYes = multiple && isArray

	const chooseOption = option => {
		const changeValue = option.value
		var newValue = null
		if (isArray) {
			const index = arrValue.indexOf(changeValue)
			if (index === -1) {
				newValue = arrValue.concat([changeValue])
			} else {
				const arr = arrValue.slice()
				arr.splice(index, 1)
				newValue = arr
			}
		} else {
			newValue = changeValue
		}
		onChange(newValue)
		if (!isArray) {
			setOptionVisible(false)
		}
	}
	const toggoleShowOptions = () => setOptionVisible(!optionVisible)
	const isActive = option =>
		multiple ? arrValue.includes(option.value) : option.value === value

	const findOption = value => options.find(i => i.value === value)

	const renderOptions = options.map(i => {
		return (
			<div
				className={
					'py-0.5  px-1.5 hover:bg-gray-200 text-base ' +
					(isActive(i) ? ' bg-blue-500 text-white' : '')
				}
				key={i.value}
				onClick={() => chooseOption(i)}
			>
				{
					<div className="flex justify-between">
						<div>{i.label}</div>
						{isActive(i) && showYes ? <div>√</div> : ''}
					</div>
				}
			</div>
		)
	})

	const removeOption = OptionValue => {
		const index = arrValue.findIndex(i => OptionValue === i)
		if (index !== -1) {
			arrValue.splice(index, 1)
		}
		setOptionVisible(true)
	}

	const renderShowContent = !multiple ? (
		<div className="py-1 px-1 w-auto">{findOption(value)?.label}</div>
	) : (
		<div className="flex flex-wrap min-h-30px py-0.5 px-1">
			{arrValue.map(i => {
				return (
					<div
						className=" flex-none my-0.5 mr-1 py-0 px-3 border border-gray-200 bg-gray-100 flex justify-between items-center"
						key={i}
					>
						<div>{findOption(i)?.label}</div>
						<div
							className="cursor-pointer ml-4 text-sm"
							onClick={e => {
								// e.nativeEvent.stopImmediatePropagation()
								e.stopPropagation()
								removeOption(i)
							}}
						>
							X
						</div>
					</div>
				)
			})}
		</div>
	)

	return (
		<div className={'relative shadow ' + outClassName}>
			<div
				className="rounded-sm select-none cursor-initial
				 bg-white border border-gray-400"
				onClick={e => {
					toggoleShowOptions()
				}}
			>
				{renderShowContent}
			</div>
			{optionVisible ? (
				<div className="mt-0.5 rounded-sm w-full absolute border border-gray-400 z-10 bg-white max-h-200px overflow-auto shadow-md">
					{renderOptions}
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default CSelect
