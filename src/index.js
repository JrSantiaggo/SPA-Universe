import {Router} from './router.js'
import {pageHome, pageUniverse, pageExploration, alterPageHome, alterPageUniverse, alterPageExploration} from './currentPage.js'

pageHome.addEventListener('click', alterPageHome)

pageUniverse.addEventListener('click', alterPageUniverse)

pageExploration.addEventListener('click', alterPageExploration)

const router = new Router()
router.add('/home', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()



