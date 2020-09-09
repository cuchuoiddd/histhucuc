// Define routes to component
import Home from './pages/Home.vue'
import Login from './pages/user/Login.vue'
import PhongKham from './pages/PhongKham/Index.vue'
import Test from './pages/PhongKham/TestLoading.vue'

export const routes = [
    {path: '/', name: 'login', component: Login},
    {path: '/home', name: 'homepage', component: Home},
    {path: '/phongkham', name: 'phongkham', component: PhongKham},
    {path: '/test', name: 'test', component: Test},
]