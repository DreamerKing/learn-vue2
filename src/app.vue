<template>
	<div :id="h2id" >
		<div v-html="greeting"></div>
		<p v-text="reverseText"></p>
		<p v-if="isOK">{{ isOK? 20*Math.random() : "hahahha"}}</p>
		<!-- <ul v-for="let item in shuiguo">
			<li v-text="item"></li>
		</ul> -->
		<p v-text="now"></p>
		<p>FullName: <span v-text="fullName"></span></p>
		<a :href="baidu" @click="clickBaidu($event)">百度</a>
		<div>
			<p>问: <input type="text" v-model="question"/></p>
			<p>答: <span v-text="answer"></span></p>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import _ from "lodash";

export default {
  name: 'app',
  constructor(props){
  	console.log("constructor");
  },
  beforeCreate: function() {
  	console.log("beforeCreate");
  },
  created: function() {
  	this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  beforeMount: function() {
  	console.log("beforeMount");
  },
  mounted: function() {
  	console.log("mounted");
  },
  beforeUpdate: function() {
  	console.log("beforeUpdate");
  },
  updated: function() {
  	console.log("updated");
  },
  beforeDestroy: function() {
  	console.log("beforeDestroy");
  },
  destroyed: function() {
  	console.log("destroyed");
  },
  methods: {
  	clickBaidu: function(event) {
  		console.log(event,"test");
  		event.preventDefault();
	  	console.log("点击了百度");
	},
	getAnswer: function() {
		if(this.question.indexOf("?") ===-1){
			this.answer = "哈哈";
			return;
		}
		this.answer = "谢谢...";
		var vm = this;
		axios.get("https://yesno.wtf/api")
			.then(function(res){
				vm.answer = _.capitalize(res.data.answer);	
			})
			.catch(function(err){
				vm.answer = "出错啦！" + err;
			})
	}
  },
  computed:{
  	reverseText: function() {
  		return this.h2id.split(',').reverse().join('*');	
  	},
  	now: function() {
  		return Date.now();
  	},
  	fullName: {
  		get: function() {
  				return `${this.firstName} ${this.lastName}`;
  		},
  		set: function(newValue) {
  			let name = newValue.split(" ");
  			this.firstName = name[0];
  			this.lastName = name[name.length-1];
  		}
  }
  },
  watch: {
  	question: function(newValue, oldValue) {
  		this.answer = "正在回复...";
  		this.debouncedGetAnswer();
  	},
  	firstName: function(value) {
  		this.fullName = `${value} ${this.lastName}`;
  	},
  	lastName: function(value) {
  		this.fullName = `${this.firstName} ${value}`;
  	}
  },
  data: function () {
    return {
      question: "想问什么？",
      answer: "不想理你",	
      greeting: '<h2>Helve Vue</h2>',
      h2id: "xxooo, hhhhhh",
      number: 20,
      isOK: true,
      shuiguo: ["苹果", "梨", "桃子"],
      baidu: "http://www.baidu.com",
      lastName: "King",
      firstName: "Dreamer"
    }
  }
}

console.log('test');
</script>