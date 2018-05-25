<template>
    <div>
        <h2 v-text="header"></h2>
        <h1 v-if="ok">Yes</h1>
        <p v-else>No</p>
        <p v-show="ok">Hello!</p>
    </div>
</template>
<!--
<template v-else>
    <p> Else Template</p>
</template>
-->
<script>
    export default {
        name: 'condition',
        data: function() {
            return {
                 header: "条件渲染", 
                 ok: false,
                 type: '1' 
             }
        } 
    }
</script>
