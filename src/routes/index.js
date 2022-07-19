import Home from './../pages/Home'
import Following from './../pages/Following'
import Upload from './../pages/Upload'
import { HeaderOnlyLayout } from '../components/Layout'
// Public Routes
const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/following', component: Following },
	{ path: '/profile', component: Following, layout: null },
	{ path: '/upload', component: Upload, layout: HeaderOnlyLayout },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
