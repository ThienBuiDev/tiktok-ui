import React, { Component, useContext } from 'react'
import { ThemeContext } from './App'
function Content2() {
	console.log('content2: ')
	const theme = useContext(ThemeContext)
	return (
		<div>
			<p className={theme}>My paragraph</p>
		</div>
	)
}
export default Content2

// class Example extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {}
// 	}

// 	componentDidMount = () => {

// 	}
// 	componentDidUpdate = () => {}

// 	render() {
// 		return <p>My paragraph</p>
// 	}
// }

// export default Example
