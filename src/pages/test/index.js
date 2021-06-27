import { useState } from 'react'
import CSelect from '../../components/select'
import CInput from '../../components/input'
import CTabs from '../../components/tabs'
import CButton from '../../components/button'

const renderTitle = text => <div className="text-2xl mt-8 mb-3">{text}</div>
const renderRightText = text => (
	<div className="h-auto ml-2 px-2 text-black text-lg inline">{text}</div>
)
const renderInput = setText => (
	<CInput className="green" placeholder="请输入文本" onChange={setText} />
)
const renderSelect = (value, setValue, multiple, outClassName) => (
	<div className={outClassName}>
		<CSelect
			multiple={multiple}
			value={value}
			options={options}
			onChange={setValue}
		/>
	</div>
)

const renderTabs = (curTab, tabs, setCurTab) => (
	<div className=" w-96">
		<CTabs outClassName="" cur={curTab} options={tabs} onChange={setCurTab} />
	</div>
)
const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
const options = list.map(i => {
	return { value: i, label: `选项${i}` }
})

const tabs = list.map(i => {
	return { value: i, label: `标签 ${i}` }
})

const Test = () => {
	const [text, setText] = useState('')

	const [selectValue, setSelectValue] = useState('a')
	const selectedText = options.find(i => i.value === selectValue)?.label

	const [selectArr, setSelectArr] = useState(['a', 'c'])
	const selectedArrText = options
		.filter(i => selectArr.includes(i.value))
		.map(i => i.label)
		.join(', ')

	const [curTab, setCurTab] = useState('b')

	const components = [
		{
			name: '输入框INPUT',
			render: renderInput(setText),
			text: 'input ----> ' + text,
		},
		{
			name: '下拉框SELECT',
			render: renderSelect(selectValue, setSelectValue, false, 'w-28'),
			text: selectedText,
		},
		{
			name: '多选下拉框MULTIPLE-SELECT',
			render: renderSelect(selectArr, setSelectArr, true, 'w-80'),
			text: selectedArrText,
		},
		{
			name: '标签TABS',
			render: renderTabs(curTab, tabs, setCurTab),
			text: tabs.find(i => i.value === curTab)?.label,
		},
		{
			name: '按钮BUTTON',
			render: (
				<CButton
					onClick={() => {
						alert('按钮测试')
					}}
				>
					按钮1
				</CButton>
			),
		},
	]

	return (
		<div className="p-4">
			{components.map(i => {
				return (
					<div key={i.name}>
						{renderTitle(i.name)}
						<div className="flex items-center">
							{i.render}
							{i.text ? renderRightText(i.text) : ''}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Test
