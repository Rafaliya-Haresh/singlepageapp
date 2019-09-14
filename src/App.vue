<template>
    <div>
        <TopNavigation></TopNavigation>
        <router-view></router-view>
    </div>
</template>

<script>
import TopNavigation from '@/components/TopNavigation';

export default {
    name: 'App',
    components: {
        TopNavigation
    }
};
</script>
