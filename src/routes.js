
import {createWebHistory,createRouter} from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Products from './pages/Products.vue'
import Calculator from './pages/Calculator.vue'
import Performance from './pages/Performance.vue'
import InvestNow from './pages/InvestNow.vue'
import Support from './pages/Support.vue'
import Welcome from './pages/Welcome.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'

import Dashboard from './pages/Dashboard.vue'
import Mail_verification from './components/Mail-confirmation.vue'
import NotificationComp from './components/NotificationComp.vue'
import InvestmentComp from './components/InvestmentComp.vue'
import TransactionsComp from './components/TransactionsComp.vue'
import DashProducts from './components/DashProducts.vue'
import AccountsComp from './components/AccountsComp.vue'
import DashSupport from './components/DashSupport.vue'
import ProfileComp from './components/ProfileComp.vue'
import SettingsComp from './components/SettingsComp.vue'
import ChooseAccount from './components/ChooseAccount.vue'
import PhoneVer from './pages/Phone-ver.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/performance',
    name: 'performance',
    component: Performance
  },
  {
    path: '/support',
    name: 'support',
    component: Support
  },
  {
    path: '/investNow',
    name: 'investNow',
    component: InvestNow
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/phone-verification',
    name: 'phone-verification',
    component: PhoneVer
  },
  {
    path: '/mail-verification',
    name: 'mail-verification',
    component: Mail_verification
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: 'home',
        name:'dashHome',
        component: NotificationComp
      },
      {
        path: 'investments',
        name:'investments',
        component: InvestmentComp
      },
      {
        path: 'transactions',
        name:'transactions',
        component: TransactionsComp
      },
      {
        path: 'accounts',
        name:'accounts',
        component: AccountsComp,
        
      },
      {
        path: 'chooseAccount',
        name:'chooseAccount',
        component:ChooseAccount
      },
      {
        path: 'dashsupport',
        name:'dashsupport',
        component:DashSupport
      },
      {
        path: 'profile',
        name:'profile',
        component:ProfileComp
      },
      {
        path: 'dashproducts',
        name:'dashproducts',
        component:DashProducts
      },
      {
        path: 'calculator',
        name:'calculator',
        component:Calculator
      },
      {
        path: 'settings',
        name:'settings',
        component:SettingsComp
      }

    
    
    ]
  }
]

const router = createRouter({
 history:createWebHistory(),
  routes
})

export default router
