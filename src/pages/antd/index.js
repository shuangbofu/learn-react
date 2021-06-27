import { Button, message } from 'antd'
const AntdTest = props => {
	return (
		<div className="p-2">
			<div className="text-4xl">antd测试</div>
			<div className="mt-9 px-2 text-left">
				<Button
					type="default"
					onClick={() => {
						message.info('哈哈哈哈')
					}}
				>
					我是按钮
				</Button>
			</div>
		</div>
	)
}

export default AntdTest
