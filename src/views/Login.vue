<template>
  <v-container fluid class="pl-0">
      <v-col cols="12" class="d-flex justify-center align-center login_block px-0">
        <v-col cols="3" class="left_side px-0"></v-col>
        <v-col cols="9" class="right_side d-flex justify-center">
          <v-col cols="6">
            <v-form v-model="valid" ref="form" lazy-validation class="form_login">
              <v-text-field
                  prepend-icon="person"
                  name="Username"
                  label="Username"
                  v-model="name"
                  :rules="nameRules"
                  :counter="10"
                  required
              ></v-text-field>
              <v-text-field
                  prepend-icon="lock"
                  name="Password"
                  label="Password"
                  type="password"
                  class="my-2"
                  v-model="password"
                  :rules="passwordRules"
                  required
              ></v-text-field>

              <v-btn
                  @click="submit"
                  :disabled="!valid"
                  @keyup.enter="submit"
                  color="yellow"
              >
                submit
              </v-btn>
              <v-btn @click="clear" color="">clear</v-btn>
            </v-form>
          </v-col>

        </v-col>
      </v-col>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'password is required',
      v => (v && v.length >= 4) || 'password must be less than 10 characters'
    ],
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {

        let url = `https://app.postmypartytest.com/token`
        const params = new URLSearchParams()
        params.append('grant_type', 'password')
        params.append('username', 'test_project_dev@mailinator.com')
        params.append('password', '123456')
        axios
            .post(url,params)
            .then((res) => {
              window.localStorage.setItem('token', res.data.access_token);
              this.$router.push({ name: 'Home' })
            })
            .catch((error) => {
              reject(error);
            });
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
 .login_block{
   height: 600px;
  }
 .left_side{
   background-color: #e1f5fe;
   width: 100%;
   height: calc(100vh + 215px)
 }
 .form_login{
   max-width: 315px;
 }
</style>