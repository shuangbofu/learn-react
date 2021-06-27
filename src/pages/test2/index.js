import { useEffect, useState } from 'react'
import CButton from '../../components/button'
import axios from 'axios'

const Child = props => {
	const { value } = props
	const tips = ['setState是异步更新的']

	// console.log(value + '.child')
	// const childValue = useState(value + '.child')
	// console.log(childValue)
	// const childValue = value + '.child'

	const mockReq = value => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				console.log('req success', value)
				res(value)
			}, 50)
			// res([value])
		})
	}

	// setTimeout(() => {
	// 	console.log('test')
	// }, 30)
	setTimeout(() => {
		alert('ddd')
	}, 300)
	// mockReq(1).then(data => {
	// 	console.log(data, new Date())
	// })

	// mockReq(1)
	return (
		<div className="border border-red-300 p-4">
			{' '}
			传递的值
			<div>
				<div className="text-lg">{value}</div>
			</div>
			{/* child的值：{childValue} */}
			<div>
				<div className="text-xl mt-4">tips:</div>
				{tips.map((i, idx) => {
					return (
						<div key={idx}>
							{idx + 1}.{i}
						</div>
					)
				})}
			</div>
		</div>
	)
}
let idx = 0
const renderItems = items => {
	if (items === undefined || items === null) {
		return null
	}
	if (typeof items === 'string') {
		return (
			<div className="mr-2" key={`${idx++}-${items}`}>
				{items}
			</div>
		)
	}
	if (items instanceof Array) {
		return (
			<div className="flex flex-wrap">{items.map(i => renderItems(i))}</div>
		)
	} else if (items instanceof Object) {
		const arr = Object.keys(items).map(k => `${k}=${items[k]}`)
		return renderItems(arr)
	} else {
		return renderItems(items.toString())
	}
}

const Father = props => {
	const [fatherObj, setFatherObj] = useState({ value: 1 })
	const [fatherArr, setFatherArr] = useState([0])

	const value = fatherObj.value
	const clickYes = () => {
		setFatherObj({ value: value + 1 })
		setFatherArr(fatherArr.slice().concat([value]))
	}
	const clickNo = () => {
		fatherObj.value += 1
		setFatherObj(fatherObj)

		fatherArr.push(value)
		setFatherArr(fatherArr)
	}

	const renderedItems = [
		{
			title: <div className="mr-10"></div>,
			itemValue: {
				left: <div className="font-bold">JSON</div>,
				right: <div className="font-bold">DOM</div>,
			},
			isTitle: true,
		},
		{ title: '对象', itemValue: fatherObj },
		{ title: '数组', itemValue: fatherArr },
	].map(i => {
		// console.log(typeof i.itemValue)
		return (
			<div key={i.title} className="flex mb-2">
				<div className="font-semibold text-lg mr-4">{i.title}</div>
				<div className="break-all w-2/5 mr-10 text-center">
					{i.isTitle ? i.itemValue['left'] : JSON.stringify(i.itemValue)}
				</div>
				<div className="break-all w-2/5 text-center">
					{i.isTitle ? i.itemValue['right'] : renderItems(i.itemValue)}
				</div>
			</div>
		)
	})
	const testReq = () => {
		// axios.post('http://localhost:8081/person/list').then(data => {
		// 	console.log(data)
		// })
		// return () => {}
	}
	// useEffect(() => {
	// 	testReq()
	// })

	// useEffect(() => {
	// 	console.log('effect', fatherObj, fatherArr)
	// })

	const buttons = [
		{ title: '+1 YES', click: clickYes },
		{ title: '+1 不渲染', click: clickNo },
		{ title: '测试请求', click: testReq },
	].map(i => {
		return (
			<div key={i.title} className=" text-center mr-2 w-24 mb-2 select-none">
				<CButton
					onClick={() => {
						i.click()
						console.log('result', fatherObj, fatherArr)
					}}
				>
					{i.title}
				</CButton>
			</div>
		)
	})

	return (
		<div className="border border-gray-400 p-4">
			<div className="flex mb-4">{buttons}</div>
			{renderedItems}
			<div className="mt-4">
				<Child value={value} />
			</div>
		</div>
	)
}

const Test2 = props => {
	return (
		<div className="text-left p-4">
			<Father />
		</div>
	)
}

export default Test2
