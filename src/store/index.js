import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    List:[],
    pageOfList:1,
    Posts:[],
    TOKEN:'3RAvJBNoPtLP-Hw_TknxB4skuIZxdnCp5vyCm9UH1lAkAQKL9gpsAHA_kHMzLDZOw_NnN4Py2m1kocpl_natr7k-xHe3l8wuiDAYuyXUfiyFo9NCYDyOX-tNJVnBun67eiPmnwYVhKuO9k86a71AhaW-80JU26LQQuhCzlGE9riJ-SWJJxskWIh-PKVXAMce0IQlywwdRkCrlWT4hw_Z82djgVMyycJhmFuBctTXM1WATlnv-kI4YarMKw4EBTm_E-as29iMx75dwCFh_PVgljkyjXCZwdSddSWErFByjwjOzEFYJ03ThNuAWnBjYYlqlUp4aGQkULu7vMQPIft_U7BF55tmz7aSSw7hxoqm8vqEnWSef3CiZffANE61EiPxdrUcMiuTmTwGO94LgxatkXRsjA0dSwKuttUYDeyMdnh8LbYnyIIU_M647M78cuVfqPuSWAVdG6lXKfXVx-kDOtS3iouzZ8IKLYEc8cAfUtRJohpGq47bVF-ruIB9haDx'
  },
  getters:{
    getList: (state) => {
      return state.List
    },
    getListPage:(state) => {
      return state.pageOfList
    },
    getPosts: (state) => {
      return state.Posts
    }
  },
  mutations: {
    ADD_LIST(state, val) {
      state.List.unshift(val);
    },
    EDIT_TITLE(state,val){
        state.List.find(x => x.Id === val.Id ? x.Name = val.Name : '')
    },
    DELETE_TITLE(state,id){
      let index
       state.List.map((x,key) =>  {if(x.Id === id){index = key}} )
       state.List.splice(index, 1);
    },
    SET_TEMP_VALS(state,val){
        state.List = val
    },
    SET_TEMP_PAGE(state,val){
      state.pageOfList = val
    },
    ADD_POST(state, val) {
      state.Posts.unshift(val);
    },
    EDIT_POST(state,val){
      let index
      state.Posts.map((x,key) =>  {if(x.Id === val.Id){index = key}} )
      Vue.set(state.Posts, index, val)
    },
    SET_POSTS_VALS(state,val){
      state.Posts = val
    },
    DELETE_POST(state,val){
      let index
      state.Posts.map((x,key) =>  {if(x.Id === val){index = key}} )
      state.Posts.splice(index, 1);
    }
  },
  actions: {
    addTemplates({commit},val) {
      return new Promise((resolve, reject) => {
        let url = `https://app.postmypartytest.com/api/Templates`
        let headers = {
          headers: {
            Authorization: `Bearer ${this.state.TOKEN}`,
            "Content-Type": "application/json",
          },
        };
        let Params = {
          params: {
            grant_type: 'password',
            username: 'test_project_dev@mailinator.com',
            password: 123456
          }
        };
        let data = val
        axios
            .post(url, data, headers)
            .then((res) => {
              commit('ADD_LIST',res.data)
            })
            .catch((error) => {
              reject(error);
            });
      });
    },
    editTemplates({commit},val) {
      return new Promise((resolve, reject) => {
        let url = `https://app.postmypartytest.com/api/Templates/${val.Id}`
        let headers = {
          headers: {
            Authorization: `Bearer ${this.state.TOKEN}`,
            "Content-Type": "application/json",
          },
        };
        let data = val
        axios
            .put(url, data, headers)
            .then(() => {
              commit('EDIT_TITLE',val)
              resolve("success");
            })
            .catch((error) => {
              reject(error);
            });
      });
    },
    deleteTemplates({commit},val) {
      return new Promise((resolve, reject) => {
        let url = `https://app.postmypartytest.com/api/Templates/${val}`
        let headers = {
          headers: {
            Authorization: `Bearer ${this.state.TOKEN}`,
            "Content-Type": "application/json",
          },
        };
        let Params = {
          params: {
            grant_type: 'password',
            username: 'test_project_dev@mailinator.com',
            password: 123456
          }
        };
        axios
            .delete(url,  headers)
            .then((res) => {
              commit('DELETE_TITLE',val)
              resolve("success");
            })
            .catch((error) => {
              reject(error);
            });
      });
    },
    getTemplates({ commit }) {
      return new Promise((resolve, reject) => {
        let url = `https://app.postmypartytest.com/api/Templates`;
        let headers = {
          headers: {
            Authorization: `Bearer ${this.state.TOKEN}`,
            "Content-Type": "application/json",
          },
        };
        let Params = {
          params: {
              grant_type: 'password',
              username: 'test_project_dev@mailinator.com',
              password: 123456
          }
        };
        axios
            .get(url,headers,Params)
            .then((res) => {
              commit("SET_TEMP_VALS", JSON.parse(JSON.stringify(res.data.Data)));
              commit("SET_TEMP_PAGE", JSON.parse(JSON.stringify(res.data.NumberOfPages)));
            })
            .catch((error) => {
              reject(error);
            });
      });
    },
    getPosts({ commit },templateId) {
      return new Promise((resolve, reject) => {
        let url = `https://app.postmypartytest.com/api/Templates/${templateId}/Posts`;
        let headers = {
          headers: {
            Authorization: `Bearer ${this.state.TOKEN}`,
            "Content-Type": "application/json",
          },
        };
        let Params = {
          params: {
            grant_type: 'password',
            username: 'test_project_dev@mailinator.com',
            password: 123456
          }
        };
        axios
            .get(url,headers,Params)
            .then((res) => {
              commit("SET_POSTS_VALS", JSON.parse(JSON.stringify(res.data.Data)));
              // resolve("success");
            })
            .catch((error) => {
              reject(error);
            });
      });
    },
    addPosts({commit},val) {
      return new Promise((resolve, reject) => {
        let url = `https://app.postmypartytest.com/api/Templates/${val.id}/Posts`
        let headers = {
          headers: {
            Authorization: `Bearer ${this.state.TOKEN}`,
            "Content-Type": "application/json",
          },
        };
        let Params = {
          params: {
            grant_type: 'password',
            username: 'test_project_dev@mailinator.com',
            password: 123456
          }
        };
        let data = val.val
        axios
            .post(url, data, headers)
            .then((res) => {
              commit('ADD_POST',res.data)
              // resolve("success");
            })
            .catch((error) => {
              reject(error);
            });
      });
    },
    editPosts({commit},val) {
      return new Promise((resolve, reject) => {
        let url = `https://app.postmypartytest.com/api/TemplatePosts/${val.Id}`
        let headers = {
          headers: {
            Authorization: `Bearer ${this.state.TOKEN}`,
            "Content-Type": "application/json",
          },
        };
        let data = val
        axios
            .put(url, data, headers)
            .then((res) => {
              commit('EDIT_POST',data)
              resolve("success");
            })
            .catch((error) => {
              reject(error);
            });
      });
    },
    deletePosts({commit},val) {
      return new Promise((resolve, reject) => {
        let url = `https://app.postmypartytest.com/api/TemplatePosts/${val}`
        let headers = {
          headers: {
            Authorization: `Bearer ${this.state.TOKEN}`,
            "Content-Type": "application/json",
          },
        };
        let Params = {
          params: {
            grant_type: 'password',
            username: 'test_project_dev@mailinator.com',
            password: 123456
          }
        };
        axios
            .delete(url,  headers)
            .then((res) => {
              commit('DELETE_POST',val)
              resolve("success");
            })
            .catch((error) => {
              reject(error);
            });
      });
    },
  },
})
