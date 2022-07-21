import classNames from 'classnames/bind'
import style from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(style)
function AccountItem() {
	return (
		<div className={cx('wrapper')}>
			<img
				className={cx('avatar')}
				src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dc0a18e318dc8790df726449985d6e03~c5_100x100.jpeg?x-expires=1658613600&x-signature=CR45XX68K8KMcdpHvivGs5qTTeA%3D'
				alt='avatar'
			/>
			<div className={cx('info')}>
				<p className={cx('name')}>
					<span>John Doe</span>
					<FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
				</p>
				<span className={cx('username')}>johndoe</span>
			</div>
		</div>
	)
}

export default AccountItem
