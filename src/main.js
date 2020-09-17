import * as components from './components'

const Vuigi = {
  install(Vue) {
    for (const componentName in components) {
      const component = components[componentName]
      Vue.component(component.name, component)
    }
  }
}

export default Vuigi

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuigi)
}