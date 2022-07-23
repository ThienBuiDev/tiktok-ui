import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import style from './Button.module.scss'

const cx = classNames.bind(style)

function Button(props) {
	let Component = 'button'
	const { className, children, type, size, disabled, rounded, ...newProps } = { ...props }
	if (newProps.to) {
		Component = Link
	} else if (newProps.href) {
		Component = 'a'
	}

	if (disabled) {
		delete newProps.onClick
	}
	return (
		<Component className={cx('wrapper',className, size, type, { disabled, rounded })} {...newProps}>
			{children}
		</Component>
	)
}

export default Button
