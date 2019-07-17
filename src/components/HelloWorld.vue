<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <h3>Agrega un nuevo blog</h3>
          <div class="input-group mb-3">
            <input type="text" class="form-control"
              placeholder="Escriba aquí la nueva tarea"
              v-model="blog">
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2" @click="saveBlog">Guardar</span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h3>Nuestros blogs</h3>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in getBlogs" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import BlogTypes from '@/store/types/BlogTypes';

@Component
export default class HelloWorld extends Vue {
  private data () {
    return {
      blog: ''
    }
  }
  public saveBlog () {
    this.actionBlog(this.$data.blog);
    this.$data.blog = '';
  }
  @Action(`BlogModule/${BlogTypes.actions.ACTBLOGS}`) actionBlog: any;
  @Getter(`BlogModule/${BlogTypes.getters.GETBLOGS}`) getBlogs: any;
}
</script>
