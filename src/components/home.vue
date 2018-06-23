<template>
  <v-content>
    <v-container fluid>
      <v-form>
        <v-text-field label="Email" v-model="email" required>
        </v-text-field>
        <v-text-field label="PassWord" type="password" v-model="password" @keyup.enter="signIn" required>
        </v-text-field>
        <v-btn @click="signIn" v-if="!go">
          Login
        </v-btn>
        <v-btn @click="$router.push({path: '/user'})" v-if="go">
          Go
        </v-btn>
      </v-form>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title>sign in info</v-card-title>
          <v-card-text>
            user: {{email}}<br>
            info: {{loginInfo}}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat="flat" @click="dialog = false">
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-content>
</template>
<style lang="less" scoped>
</style>
<script>
export default {
  name: 'home',
  data: function () {
    return {
      email: '',
      password: '',
      dialog: false,
      loginInfo: '',
      go: false
    }
  },
  methods: {
    signIn: function () {
      const vm = this
      vm.loginInfo = 'null'
      vm.go = true
      vm.$firebase.auth().signInWithEmailAndPassword(vm.email, vm.password)
        .catch(function (e) {
          vm.loginInfo = 'login failed'
          vm.go = false
          console.log(JSON.stringify(e))
        })
      vm.dialog = true
    }
  }
}
</script>
