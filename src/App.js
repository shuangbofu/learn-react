import Test from './pages/test'
import Hello from './pages/hello'
import AntdTest from './pages/antd'
import Test2 from './pages/test2'

import CTabs from './components/tabs'
import { useState } from 'react'
import Test3 from './pages/test3'

const App = () => {
	const tabs = [
		{ value: 'hello', label: 'Hello React', render: <Hello /> },
		{ value: 'test', label: '测试', render: <Test /> },
		{ value: 'test2', label: '测试2', render: <Test2 /> },
		{ value: 'test3', label: '测试3', render: <Test3 /> },
		{ value: 'antd', label: 'antd测试', render: <AntdTest /> },
	]

	const [tab, setTab] = useState('test3')
	return (
		<div className="App">
			<div className="w-screen">
				<CTabs options={tabs} onChange={setTab} cur={tab} />
			</div>
			<div style={{ height: 'calc(100vh - 44px)' }} className="overflow-auto">
				{tabs.find(i => i.value === tab)?.render}
			</div>
		</div>
	)
}

export default App
