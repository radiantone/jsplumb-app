<template>
  <div
    class="table node shadow-1 jtk-node"
    :style="
      'top:500px;height:200px;left:500px' +
      ';width:500px;min-width:500px; z-index: 99999; background-color: lightgrey;'
    "
    @touchstart.stop
    @contextmenu.stop
  >
    A component
  </div>
</template>

<script>
import { BaseNodeComponent } from '@jsplumbtoolkit/browser-ui-vue3';

export default {
  name: 'ScriptTemplate',
  mixins: [BaseNodeComponent],
  setup() {
    console.log('ScriptTemplate setup')
  },
  mounted () {
    console.log('template mounted')
  }
};
</script>
