<template>
  <div
    class="table node shadow-1 jtk-node"
    :style="
      'top:' +
      obj.y +
      ';left:' +
      obj.x +
      ';min-width:' +
      obj.width +
      '; z-index: 99999; background-color: blue'
    "
    @touchstart.stop
    @contextmenu.stop
  >
    BLA BLA BLA BLA
  </div>
</template>

<script>
export default {
  name: 'ScriptTemplate',
  setup() {
    console.log('ScriptTemplate setup')
  },
  data: function () {
    return {
      obj: {
        language: 'Python',
        icon: 'las la-scroll',
        titletab: false,
        consoleview: false,
        portcounters: {},
        receipt: new Date(),
        notes: '',
        style: '',
        variabledata: [],
        envfacts: true,
        passenv: false,
        infengine: true,
        x: 500,
        y: 500,
        top: 500,
        left: 500,
        version: 'v1.2.2',
        perworker: true,
        ratelimit: '60',
        websocket: 'xxxx',
        bandwidth: true,
        requirements: '',
        gittag: '',
        container: false,
        imagerepo: 'local',
        containerimage: 'xxxx',
        environment: '',
        usegit: true,
        enabled: true,
        endpoint: false,
        beat: false,
        streaming: true,
        api: 'xxxx',
        type: 'script',
        name: 'Processor',
        label: 'Script',
        description: 'description',
        package: 'package',
        concurrency: 3,
        cron: '* * * * *',
        interval: -1,
        useschedule: false,
        disabled: false,
        commit: '',
        gitrepo:
          'xxxxxx',
        columns: [],
        modulepath: 'xxx',
        readwrite: 0,
        status: 'stopped',
        properties: [],
      },
    }
  }
};
</script>
