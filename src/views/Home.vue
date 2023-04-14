<template>
    <div >
        <v-container>
            <StoriesTop v-if="isLoggedIn"/>
            <Story v-if="isLoggedIn"/>
        </v-container>
    </div>
</template>

<script>
import {defineComponent} from "vue";

import StoriesTop from "@/components/StoriesTop.vue";
import Story from "@/components/Story.vue";

import {mapState} from 'vuex';


export default defineComponent({
    name: "Home",
data() {
    return {
        
    }
},
    components: {

        StoriesTop,
        Story,
 
    },
    
    computed: {
        ...mapState(['isLoggedIn'])
    }
});
</script>
<style scoped>
</style>