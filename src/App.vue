<template>
<h1>js6 frameworks</h1>
<!--
  <TButton label="plus" @clicked="onPlus"/>
  <TButton label="minus" @clicked="onMinus"/>
  <TButton label="set to 500" @clicked="onSet"/>
  <div>{{ $store.state.counter }}</div>
  <RouterView/> -->

  <TModal @cancel-clicked="onCancelClicked" @ok-clicked="onOkClicked" @modal-closed="onModalClosed">
    <p v-if="modalContent === 'first'">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi placeat cumque aut nihil, tenetur aliquam totam alias soluta delectus veniam culpa magni aperiam perferendis, similique quaerat, odio assumenda ducimus commodi?</p>
    <img v-else-if="modalContent === 'second'" src="/src/assets/logo.svg" />
  </TModal>
  <TButton label="delete record" @clicked="deleteRecord"/>
  <TButton label="open restricted content" @clicked="restContent"/>

  <p v-if="deleted">successfully deleted ....</p>

  <RouterView />

</template>

<script>
import TButton from '@/components/TButton.vue'
import TModal from '@/components/TModal.vue'
  export default {
    name: 'App',
    computed: {
      modalContent () {
        return this.$store.state.modalContent
      }
    },
    data () {
      return {
        deleted: false,
      }
    },
    methods: {
      onPlus () {
        // change value in store
        // this.$store.state.counter += 1
        this.$store.commit('increment')
      },
      onMinus () {
        this.$store.commit('decrement')
      },
      onSet () {
        this.$store.commit('setValue', 500)
      },
      deleteRecord () {
        this.$store.commit('setModalTitle', 'confirm deleting')
        this.$store.commit('setModalContent', 'first')
        this.$store.commit('showModal')
      },
      restContent () {
        this.$store.commit('setModalTitle', 'do you want to see that?')
        this.$store.commit('setModalContent', 'second')
        this.$store.commit('showModal')
      },
      onCancelClicked () {
        this.$store.commit('closeModal')
      },
      onOkClicked () {
        this.$store.commit('closeModal')
      },
      onModalClosed () {
        if (this.modalContent === 'first') {
          this.deleted = true
        } else {
          this.$router.push('/restricted')
        }
      }
    },

    components: { TButton, TModal }
  }
</script>