<template>
  <v-container fluid>
    <v-layout row v-for="(item, key, index) in o" :key="index">
      <v-flex xs4>
        <v-subheader>{{h[key]}}</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field v-model="o[key]">
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-btn color="success" @click="readBase">Refresh</v-btn>
    <v-btn color="error" @click="writeBase">Save</v-btn>
  </v-container>
</template>
<script>
export default {
  name: 'user',
  data: function () {
    return {
      o: {
        nickname: '',
        code: '',
        email: '',
        msg: ''
      },
      n: {},
      h: {
        nickname: 'nickname',
        code: 'code',
        email: 'email',
        msg: 'msg'
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      if (!this.$firebase.auth().currentUser) {
        this.$router.push({path: '/'})
        return 0
      }
      this.readBase()
    })
  },
  methods: {
    readBase: function () {
      const vm = this
      const userId = vm.$firebase.auth().currentUser.uid
      const ref = vm.$firebase.database().ref('/users/' + userId)
      ref.once('value', function (s) {
        vm.o = Object.assign(vm.n, vm.o, s.val())
        console.log(vm.o)
      })
    },
    writeBase: function () {
      const vm = this
      const userId = vm.$firebase.auth().currentUser.uid
      vm.$firebase.database().ref('/users/' + userId)
        .set(this.n)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
