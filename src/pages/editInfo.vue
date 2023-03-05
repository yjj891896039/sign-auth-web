<template>
  <div>this is editInfo ~</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        name() {
            
        }
    },
    mounted () {
        console.log('this.$http:',this.$http);
        this.$http.post('/users').then(res=>{
            console.log('users:',res);
        })
    },
}
</script>

<style>

</style>