<template>
  <Window title="后台管理系统" width="600" height="300" margined v-on:close="exit">

    <Box horizontal padded>
      <Text>{{msg}}</Text>
      <Button v-on:click="onBtn">OK</Button>
    </Box>

  </Window>
</template>

<script>
import libui from 'libui-node'

export default {
  data() {
    return {
      msg: true,
    }
  },
  methods: {
    exit() {
      libui.stopLoop();
    },
    onBtn() {
      
      this.msg = !this.msg
    },

  },
}
</script>