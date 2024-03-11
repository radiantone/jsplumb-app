<template>
  <jsplumb-toolkit
    ref="toolkitComponent"
    auto-save="false"
    class="jtk-surface"
    :surface-id="surfaceId"
    id="toolkit"
    v-bind:render-params="this.renderParams()"
    v-bind:toolkit-params="this.toolkitParams()"
    v-bind:view="this.viewParams()"
    style="overflow: hidden !important; height: 100vh; width: 100%"
  >
  </jsplumb-toolkit>
  <jsplumb-miniview
    style="background:grey;position:absolute;z-index:99999;min-width: 300px; min-height: 300px; top:100px; left:100px;"
    :surface-id="surfaceId"
  />
</template>
<style>
.jtk-surface {
  background-image: url('src/assets/images/Graph-paper.svg');
  height: 100vh;
  overflow: hidden;
}
</style>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ScriptTemplate from 'src/components/templates/ScriptTemplate.vue'

import { ready } from '@jsplumbtoolkit/browser-ui';
import 'assets/css/jsplumbtoolkit-browser-ui-plugin-background.css';
import 'assets/css/jsplumbtoolkit-connector-editors.css';
import 'assets/css/jsplumbtoolkit-controls.css';
import 'assets/css/jsplumbtoolkit.css';
import 'assets/css/jsplumbtoolkit-edge-type-picker.css';

export default defineComponent({
  name: 'ExampleComponent',
  setup() {
    const surfaceId = 'mysurface';

    return {
      surfaceId
    }
  },
  mounted() {

    ready(() => {
      let toolkit = this.$refs.toolkitComponent.toolkit;
      let surface = this.$refs.toolkitComponent.surface;


      surface.setZoom(1.0);
      surface.setPan(0, 0);
      let node = {
            icon: 'las la-scroll',
            style: '',
            type: 'script',
            name: 'Script',
            label: 'Script',
            description: 'description',
            package: 'package',
            version: '1.0.0',
            disabled: false,
            columns: [],
            x: 500,
            y: 500,
            top: 100,
            left: 100,
            properties: [],
          }
      toolkit.addNode(node)
    });
  },
  methods: {
    viewParams: function() {
      return {
        nodes: {
          script: {
            component: ScriptTemplate,
            events: {
              tap: function (params) {
                console.log('ScriptTemplate:TAP',params)
              }
            }
          }
        }
      };
    },
    toolkitParams: function() {
      return {};
    },
    renderParams: function() {
      return {};
    }
  }
});
</script>
