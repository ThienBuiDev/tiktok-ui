import Header from './Header'
import Sidebar from './Sidebar'

const DefaultLayout = ({ children }) => {
	return (
		<div>
			<Header></Header>
			<div className='container'>
				<Sidebar />
				<div className='content'>{children}</div>
			</div>
		</div>
	)
}

export default DefaultLayout
