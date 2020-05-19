import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: '_home',
    component: Home,
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: () => import('../views/Home.vue')
      // }
    ]
  }
]

export default routes
