<template>
    <div>
    <h3 v-if="user">hi,{{ user.first_name }}{{ user.last_name }}</h3>
    <h3 v-if="!user">You are not logged in</h3>
    </div>
</template>

<script>

/* eslint-disable */
// eslint-disable-next-line

import {mapGetters} from 'vuex'

export default{
    name: 'Home',
    compute:{
        ...mapGetters(['user'])
    }
}

</script>