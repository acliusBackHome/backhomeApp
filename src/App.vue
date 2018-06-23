<template>
  <v-app>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">backHome</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-btn color="primary" icon>
      <v-icon>
        add
      </v-icon>
    </v-btn>
  </v-app>
</template>
<script>
export default {
  name: 'backHome',
  mounted: function () {
    this.$nextTick(function () {
      alert()
    })
  }
}
</script>
<style>
</style>
