<template>
  <v-theme-provider root >
    <v-container fluid>
      <v-row justify="center" >
        <v-col xs="12" sm="8">
          <v-card :elevation="6">
            <CreateList />
            <v-list subheader two-line flat>
              <v-list-item-group>
                <List
                    v-for="(item, i) in computedList"
                    :key="item.id"
                    :item="item"
                />
                <v-pagination
                    color="light-blue lighten-4"
                    v-model="page"
                    :length="Math.ceil(getList.length/limit)"
                ></v-pagination>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script>
import CreateList from "../components/CreateList";
import List from "../components/List";
import { mapGetters } from "vuex";

  export default {
    name: 'Home',
    data:() => ({
      limit:5,
      page:1,
    }),
    beforeCreate() {
      this.$store.dispatch('getTemplates')
      this.page = this.getListPage
    },
    computed:{
      ...mapGetters(["getList","getListPage"]),
      computedList(){
        return this.limit ? this.getList.slice(this.limit*(this.page-1),this.limit*this.page) : this.getList
      }
    },
    components:{
      CreateList,
      List
    }
  }
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>