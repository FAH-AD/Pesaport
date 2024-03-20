
import {createWebHistory,createRouter} from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Products from './pages/Products.vue'
import Performance from './pages/Performance.vue'
import Support from './pages/Support.vue'
import Welcome from './pages/Welcome.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import Dashboard from './pages/Dashboard.vue'
import NotificationComp from './components/NotificationComp.vue'
import InvestmentComp from './components/InvestmentComp.vue'
import TransactionsComp from './components/TransactionsComp.vue'
import AccountsComp from './components/AccountsComp.vue'
import DashSupport from './components/DashSupport.vue'
import ProfileComp from './components/ProfileComp.vue'
import SettingsComp from './components/SettingsComp.vue'
import ChooseAccount from './components/ChooseAccount.vue'
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
