import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import { DefaultLayout } from './components/Layout'
const App = () => {
	return (
		<Router>
			<div className='App'>
				<Routes>
					{publicRoutes.map((route) => {
						const Page = route.component
						var Layout
						if (route.layout === null) {
							Layout = Fragment
						} else if (route.layout === undefined) {
							Layout = DefaultLayout
						} else {
							Layout = route.layout
						}
						console.log(typeof Layout)
						return (
							<Route
								key={route.path}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							/>
						)
					})}
				</Routes>
			</div>
		</Router>
	)
}

export default App
