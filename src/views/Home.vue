<template>
    <div>
       its works
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'Home',
    data(){
        return {
            name: 'test'
        }
    },
    computed: {
        ...mapGetters(['dataArray'])
    },
    created(){
        this.loadInit();
    },
    methods: {
        ...mapActions(['getData']),
        loadInit: function(){
            this.getData();
        }
    }
};
</script>

<style scoped>
    .home-hero {
        background: url('http://source.unsplash.com/0BhSKStVtdM');
        background-size: cover;
        width: 100%;
        height: 100%;
    }
</style>
