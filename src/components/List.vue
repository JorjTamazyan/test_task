<template>
      <v-list-item >
      <template #default="{ active, toggle }">
        <v-list-item-content v-if="!isEditing" @click="openPost(item.Id,item.Posts)"  >
          <v-list-item-title :class="{done: active}">
            {{ item.Name  }}
          </v-list-item-title>
          <v-list-item-subtitle class="my-3">Post : {{item.Posts}}</v-list-item-subtitle>
          <v-list-item-subtitle>
            Added on:{{item.DateCreated}}
          </v-list-item-subtitle>
        </v-list-item-content>
        <form v-else class="flex-grow-1" @submit.prevent="finishEditing()">
          <input
              type="text"
              class="form-control"
              v-model="newTitle"
              @blur="finishEditing(item.Id)"
              ref="newList"
          />
        </form>
        <v-btn fab ripple small color="light-blue lighten-4" class="mr-5" @click="startEditing(item.Id)">
          <v-icon class="white--text">mdi-pen</v-icon>
        </v-btn>
        <v-btn fab ripple small color="#ff7b9c"  @click="removeItem(item.Id)">
          <v-icon class="white--text">mdi-close</v-icon>
        </v-btn>
      </template>
    </v-list-item>
</template>

<script>
export default {
  name: "List",
  data: () => ({
    isEditing: false,
    newTitle:''
  }),
  props:['item'],
  methods:{
    startEditing(id){
      if (this.isEditing) {
        this.finishEditing();

      } else {
        this.newTitle = this.item.Name;
        this.isEditing = true;
        this.$nextTick(() => this.$refs.newList.focus());
      }
    },
    finishEditing(id) {
      this.isEditing = false;
      let item = {
        Id:id,
        Name:this.newTitle
      }
      this.$store.dispatch("editTemplates",item)
    },
    removeItem(i){
      this.$store.dispatch("deleteTemplates",i)
    },
    openPost(id,post){
      this.$router.push({ name: 'post', query: {id:id} })
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
.form-control{
  transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  border: 3px solid #2196f3 !important;
  border-radius: 20px ;
  padding: 2px 8px;
}
</style>