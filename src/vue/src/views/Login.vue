<template>
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md"></div>
        <div class="col-sm-12 col-md">

          <LoginBox />

        </div>
        <div class="col-sm-12 col-md"></div>
      </div>
    </div>


    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginBox from "@/components/LoginBox.vue"; // @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

@Component({
  components: {
    LoginBox
  }
})
export default class Home extends Vue {}
</script>
