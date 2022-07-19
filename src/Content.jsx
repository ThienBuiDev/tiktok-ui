import { useState, useRef, useEffect, memo } from 'react'
import Content2 from './Content2'
function Content() {
	return (
		<div>
			<Content2 />
		</div>
	)
}

export default memo(Content)

