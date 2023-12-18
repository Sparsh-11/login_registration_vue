<template>
    <div class="alert alert-danger" role="alert">
        {{ error }}
      </div>
</template>

<script>

/* eslint-disable */
/* eslint-disable vue/multi-word-component-names */
// eslint-disable-next-line 

   export default{
    name: 'Error',
    props:['error']
   }
</script>