import React, { useState, useEffect, useReducer, useRef, forwardRef } from 'react'
import video1 from './Videos/video1.mp4'

// function Example({ videoRef }) {
// 	return (
// 		<>
// 			<video ref={videoRef} src={video1} width={300}></video>
// 		</>
// 	)
// }

function Example({ videoRef }) {
	return (
		<>
			<video ref={videoRef} src={video1} width={300}></video>
		</>
	)
}
export default forwardRef(Example)
