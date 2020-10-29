import Home from '../components/home/Home';
import Customers from '../components/customers/Customers';
import Tools from '../components/tools/Tools';
import Layout from '../components/Layout';
import Login from '../components/users/Login'

const states = [
  {
    name : 'layout',
    component : Layout
  },
  {
    name : 'login',
    url : '/login',
    component : Login
  },
  {
    name : 'layout.home',
    url  : '/',
    component : Home
  },
  {
    name : 'layout.tools',
    url  : '/tools',
    component : Tools
  },
  {
    name : 'layout.customers',
    url  : '/customers',
    component : Customers
  }
]

export default states
