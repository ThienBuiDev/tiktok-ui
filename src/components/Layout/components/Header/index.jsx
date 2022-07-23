import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css' // optional

import Button from '../Button'
import style from './Header.module.scss'
import images from '../../../../assets/images'
import { Wrapper as PopperWrapper } from '../Popper'
import AccountItem from '../AccountItem'
const cx = classNames.bind(style)
const Header = () => {
	const [searchResult, setSearchResult] = useState([])
	useEffect(() => {
		setTimeout(() => {
			setSearchResult([])
		}, 0)
	}, [])
	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<img src={images.logo.default} alt='TiktokLogo' />
				<Tippy
					visible={searchResult.length > 0}
					interactive
					render={(attrs) => (
						<div className={cx('search-result')} tabIndex='-1' {...attrs}>
							<PopperWrapper>
								<h4 className={cx('search-title')}>Accounts</h4>
								<AccountItem />
								<AccountItem />
								<AccountItem />
								<AccountItem />
							</PopperWrapper>
						</div>
					)}>
					<div className={cx('search')}>
						<input type='text' placeholder='Search accounts and videos' spellCheck={false} />
						<button className={cx('clear')}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
						<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
						<Tippy content='Search' placement='top'>
							<button className={cx('search-btn')}>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</button>
						</Tippy>
					</div>
				</Tippy>

				<div className={cx('actions')}>
					<Button type='text' size='medium' target='_blank'>
						Upload
					</Button>
					<Button type='primary' size='medium' target='_blank' className={cx('custom-login')} rounded>
						Log in
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
