import DefaultTheme from 'vitepress/theme'
import MyProjects from './components/MyProjects.vue'
import Layout from './Layout.vue'
import './style.css'
import AdUnit from './components/AdUnit.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('MyProjects', MyProjects)
    app.component('AdUnit', AdUnit)
  }
}