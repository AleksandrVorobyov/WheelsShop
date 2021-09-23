import { createStore } from 'vuex'
import WheelsHeader from './modules/WheelsHeader.js'
import WheelsNavigation from './modules/WheelsNavigation.js'
import WheelsAbout from './modules/WheelsAbout.js'
import WheelsStatistics from './modules/WheelsStatistics.js'
import WheelsFeatured from './modules/WheelsFeatured.js'
import WheelsTeam from './modules/WheelsTeam.js'
import WheelsSocial from './modules/WheelsSocial.js'
import WheelsFooter from './modules/WheelsFooter.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    WheelsHeader,
    WheelsNavigation,
    WheelsAbout,
    WheelsStatistics,
    WheelsFeatured,
    WheelsTeam,
    WheelsSocial,
    WheelsFooter,
  }
})
