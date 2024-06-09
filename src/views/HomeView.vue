
<template>
  <h1>home page</h1>
  <div class="square">{{ counter }}</div>
  <!-- <div class="square">{{ counter2 }}</div> -->
  <TButton label="set to 200" @clicked="setTo(200)"/>
  <TButton label="set to 300" @clicked="setTo(300)"/>
  <input @change="onChange" ref="myInput">
  <div>{{  fullname }}</div>
</template>
<script>

import TButton from '@/components/TButton.vue'
export default {
  name: 'HomeView',
  data () {
    return {
      firstname: 'Jedna',
      lastname: 'Dvě'
    }
  },
  computed: {
    counter: {
      get () {
        return this.$store.state.counter // this.counter
      },
      set (value) {
        this.$store.commit('setValue', value)
      }
    },
    fullname: {
      get () {
        return this.firstname + ' ' + this.lastname
      },
      set (value) { // 'Karel Houska'
        const splited = value.split(' ')
        this.firstname = splited[0]
        this.lastname = splited[1]
      }
    }
  },
  // data () {
  //   return {
  //     counter2: this.$store.state.counter
  //   }
  // },
  watch: {
    counter (nv) {
      console.log('new value is ' + nv)
    }
  },
  methods: {
    setTo(value) {
      // this.$store.commit('setValue', value)
      // this.counter2 = value
      this.counter = value
    },
    onChange () {
      this.fullname = this.$refs.myInput.value
    }
  },
  components: { TButton }
}


</script>

<style scoped>
.square {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>
