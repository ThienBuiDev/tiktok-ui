import Header from './Header'

const DefaultLayout = ({ children }) => {
	return (
		<div>
			<Header></Header>
			<div className='container'>
				<div className='content'>{children}</div>
			</div>
		</div>
	)
}

export default DefaultLayout
