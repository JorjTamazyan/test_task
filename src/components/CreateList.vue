<template>
  <v-list two-line subheader>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <v-text-field v-model="newList" id="newList" name="newList" label="Create a template name" @keyup.enter="addList" required lazy-validation />
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "CreateList",
  data() {
    return {
      newList: "",
    }
  },
  methods:{
    addList() {
      if(this.newList !== ""){
        let list  = {
          Name:this.newList
        }
        this.$store.dispatch("addTemplates",list)
        this.newList = "";
      }
    },
  },
}
</script>

<style scoped>

</style>