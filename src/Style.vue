<style scoped>
    .active {
        color: aquamarine;
    }
    .text-danger::after{
        content: "!";
        color: red;
    }
    .mix {
        font-size: 20px;
    }
</style>

<template>
    <div>
        <h2 v-text="msg"></h2>
        <a href="baidu.com" class="static" :class=" {active: isActive, 'text-danger': hasError }" @click.prevent="clickBaidu" >Baidu</a>
        <p :class="classObj">对象形式</p>
        <p :class="computedClass">计算属性</p>
        <p :class="[activeClass, errorClass]">数组写法</p>
        <p :class="[classObj, mixClass]">混合写法</p>
        <p :style="{color: 'red', fontSize: 20+'px'}">style样式的绑定</p>
        <p :style="styleObj">样式的对象绑定</p>
        <p :style="[styleObj]">样式的数组对象绑定</p>
        <p :style="{ display: ['-webkit-box', '-mz-flexbox', 'flex']}">绑定多重置值，主要用于添加样式属性前缀</p>
    </div>
</template>
<script>
export default {
    name: "learn-style",
    data: function() {
        return {
            msg: "Style 展示",
            isActive: false,
            hasError: true,
            classObj: {
                active: true,
                'text-danger': false
            },
            styleObj: {
                color: "blue",
                fontSize: "20px"
            },
            activeClass: 'active',
            mixClass: 'mix',
            errorClass: 'text-danger'
        }
    },
    computed: {
        computedClass: function() {
            return {
                active: this.isActive && !this.hasError,
                'text-danger': this.hasError
            }
        }
    },
    methods: {
        clickBaidu: function() {
            this.isActive = !this.isActive;
            this.hasError = !this.hasError;
            console.log("Baidu");
        }
    } 
}
</script>