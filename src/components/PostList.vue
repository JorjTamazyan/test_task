<template>
  <v-container fluid>
    <v-row class="album p-1 d-flex justify-center">
      <template>
        <v-col cols="12" class="row d-flex justify-center ">
          <v-col cols="12" md="5" lg="3" v-for="(post, index) in computedPosts" :key="index * editCount"  class="mx-5 my-4 pa-0">
            <v-card class="mx-auto card_height" :elevation="6">
              <div class="hover-wrapper">
                <v-img height="250"
                       eager
                       position="center center"
                       :src="post.Image"
                >
                </v-img>
                <img src="https://postmyparty-staging.s3-accelerate.amazonaws.com/%2FUserImages%2F104%2FTemplates%2FPlan+Increase.png">
              </div>
              <v-col class="d-block">
                <v-card-text >{{ post.Text }}</v-card-text>
              </v-col>
              <v-col class="py-0">
                <v-card-actions >
                  <v-btn-toggle dense>
                    <v-btn text @click="editPost(post)" color="light-blue lighten-2">Edit Post</v-btn>
                    <v-btn text @click="deletePost(post)" color="yellow">Delete Post</v-btn>
                  </v-btn-toggle>
                </v-card-actions>
              </v-col>
              <v-col>
                <div>
                  <div class="overline dsp_inline">Day : {{ post.Day }} </div>
                  <div class="overline dsp_inline"> {{ post.Time }}</div>
                </div>
              </v-col>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-pagination
                color="rgb(174, 230, 255)"
                v-model="page"
                :length="Math.ceil(getPosts.length/limit)"
            ></v-pagination>
          </v-col>
          <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
          >

            <v-card>
              <v-card-title class="mx-4">
                <span class="headline">{{ postType }} Post</span>
              </v-card-title>
              <v-card-text>
                <v-container class="d-flex justify-center">
                  <v-col cols="12" >
                    <v-form v-model="valid" ref="form" >
                      <v-textarea
                          name="input-7-1"
                          label="Message"
                          hint="Max Length 500 char"
                          v-model="message"
                          :rules="messageRules"
                          :counter="500"
                          required
                      ></v-textarea>

                      <input type="file" accept="image/*" @change="fileSelected" class="mt-4" /><br/><img class="mt-4" v-if="image" :src="image" width="200px"/><br/>

                      <v-text-field
                          label="Day"
                          v-model.number="day"
                          :rules="dayRules"
                          hint="You can type only 1-31"
                          required
                      ></v-text-field>

                        <v-time-picker
                            full-width
                            :rules="timeRules"
                            v-model="time"
                            format="ampm"
                        ></v-time-picker>

                    </v-form>
                  </v-col>
                </v-container>

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="save()"
                    :disabled="!valid || !time"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </template>
    </v-row>
    <v-col class="d-flex justify-end">
      <v-btn
          class="text-right mr-10"
          x-large
          fab
          color="yellow"
          @click="createPost"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </v-col>
  </v-container>

</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "PostList",
  data: () => ({
    page:1,
    limit:6,
    image: '',
    valid:false,
    dialog: false,
    message:'',
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length <= 500) || 'Message must be less than 500 characters'
    ],
    dayRules: [
      v => !!v || 'Day is required',
      v => (v && v <= 31 && v >= 1 ) || 'Value must be from 1 to 31'
    ],
    day:Number,
    id:null,
    time:'',
    timeRules: [
      v => !!v || 'Time is required',
    ],
    postType:'',
    imageType: '',
    imageName: '',
    newImage: '',
    editCount: 1
  }),
  beforeCreate() {
    this.$store.dispatch('getPosts',this.$route.query.id)
  },
  methods: {
    editPost(item){
      this.postType = 'Edit'
      this.id = item.Id
      this.message = item.Text
      this.day = item.Day
      this.time = item.Time
      this.image = item.Image
      this.dialog = true
    },
    createPost(){
      this.postType = 'Create'
      this.Id = '',
      this.message = ''
      this.day = ''
      this.time = ''
      this.image = ''
      this.dialog = true
    },
    deletePost(item){
      this.$store.dispatch("deletePosts",item.Id)
    },
     save(){
      if (this.$refs.form.validate()) {
        let postList = {
          Text: this.message,
          Image: this.image,
          Day: this.day,
          Time: this.time,
        }
        if (this.postType == 'Create') {
          let obj = {}
          obj.id = this.$route.query.id
          obj.val = postList
          this.$store.dispatch("addPosts", obj)
          this.upload()
          this.message = ''
          this.image = ''
          this.day = ''
          this.time = ''
        } else if (this.postType == 'Edit') {
          this.upload()
          postList.Id = this.id
          this.$store.dispatch("editPosts", postList)
        }
        this.dialog = false
      }
    },
    fileSelected(event){
      const file = event.target.files.item(0);
      this.newImage = file
      this.imageType = file.type
      this.imageName = file.name
      const reader = new FileReader();
      reader.addEventListener('load', this.imageLoaded);
      reader.readAsDataURL(file);
    },
    imageLoaded(event){
      this.image = event.target.result;
    },
    async upload(){
      const form = new FormData();
      let headers = {
        headers: {
          Authorization: `Bearer ${this.$store.state.TOKEN}`,
          "Content-Type": "application/json",
        },
      };
      await axios.get('https://app.postmypartytest.com/api/amazonS3Tools/AmazonSignedPolicy', headers)
          .then((res) => {
            const url = "https://postmyparty-staging.s3-accelerate.amazonaws.com/"
            const baseFileName = `/UserImages/104/Templates/${this.imageName}`
            const method = "POST"
            let headersNew = {
              headers: {
                "Content-Type": "*",
                "Access-Control-Allow-Origin": "*",
              },
            };
            const data = new FormData()
            data.append("key", baseFileName)
            data.append("AWSAccessKeyId", res.data.AccessKeyId)
            data.append("acl", 'public-read')
            data.append("policy", res.data.Policy)
            data.append("signature", res.data.Signature)
            data.append("Content-Type", 'image/png')
            data.append("filename", this.imageName)
            data.append("file", new Blob([this.image], {type: "image/png"}))
            axios.post(url, data, headersNew)
                .then(() => {})
                .catch((error) => {
                  console.log('error amazon')
                })
          })
          .catch((error) => {
            console.log(error )
          });
    },
  },
  computed:{
    ...mapGetters(["getPosts"]),
    computedPosts(){
      return this.limit ? this.getPosts.slice(this.limit*(this.page-1),this.limit*this.page) : this.getPosts
    },
  },




}
</script>

<style lang="scss" scoped>
.dsp_inline{
  display: inline;
  margin-left: 15px;
}

.hover-wrapper {
  display: block;
  position: relative;
  overflow: hidden;
}

.hover-wrapper .v-image {
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.hover-wrapper:hover .v-image {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.card_height{
  min-height: 480px;
}
</style>