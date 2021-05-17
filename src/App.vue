<template>
  <v-app>
    <v-app-bar color="light-blue lighten-5" app content-class="elevation-0">
      <v-img
          class="mx-2"
          src="https://i.imgur.com/qgGY4tB.png"
          max-height="40"
          max-width="40"
          contain
      ></v-img>

      <v-toolbar-title class="ml-2" content-class="elevation-0">
        Test Project
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-main class="pt-0">
        <router-view/>
      </v-main>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){
  box-shadow: 0px 0px !important;
}
</style>