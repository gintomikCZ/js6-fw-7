<template>
  <button @click="$emit('clicked')">{{  label  }}</button>
</template>
<script>

export default {
  name: 'TButton',
  props: {
    label: String
  }
}

</script>