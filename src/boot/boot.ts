import { boot } from 'quasar/wrappers';
import { JsPlumbToolkitVue3Plugin } from "@jsplumbtoolkit/browser-ui-vue3"

export default boot(({ app }) => {
  app.use(JsPlumbToolkitVue3Plugin)
  console.log("Loading JSPlumb")
})
