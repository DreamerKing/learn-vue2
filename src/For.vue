<template>
    <div>
        <h2 v-text="mgs"></h2>
        <ul>
            <li v-for="(item, index) in items" v-text="item" :key="index"></li>
        </ul>
        <div>
            <p v-for="(value, key) of person" :key="key" v-text="`${key} : ${value}`"></p>
        </div>
        <div> <span v-for="n in 10"> {{n}} </span></div>
        <div>
             <ul>
                 <template v-for="(item, index) in items">
                    <li  v-text="item" :key="index"></li>
                    <li class="divider" ></li>
                 </template>
        </ul>
        </div>
        <div>
            <h2>任务列表</h2>
            <input type="text" v-model="newTodoText"
                        @keyup.enter="addNewTodo"
                        placeholder="请输入新的任务"/>
            <ol>
                <template v-for="(todo, index) of todos">
                    <li is="todo-item"
                        :key="todo.id" 
                    >{{todo.text}} 
                    <button @click="removeTodo(index)">X</button>
                    </li>
                </template>  
            </ol>            
        </div>
    </div>
</template>
<script>
export default {
    name: 'for',
    data: function() {
        return { 
            mgs: "列表渲染",
            items: [ "苹果", "栗子", "李子"],
            newTodoText: "",
            nextTodoId: 4,
            todos: [
                { 
                    text: "T1",
                    id: 1
                },
                  { 
                    text: "T2",
                    id: 2
                }
            ],
            person: {
                name: "King",
                age: 20,
                address: "杭州市"
            }
        }
    },
    methods: {
        removeTodo: function(index) {
            this.todos.splice(index, 1);
        },
        addNewTodo: function() {
            this.todos.push({
                id: this.nextTodoId++,
                text: this.newTodoText
            });
            this.newTodoText = "";
        }
    }
}
</script>

