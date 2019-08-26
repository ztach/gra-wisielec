var vueApp = new Vue({
  el: '#vueApp',
  data: {
    todos: [{
      name: "Feed the dog",
      editing: false,
      complete: true,
    },{
      name: "Feed the cat",
      editing: false,
      complete: false,
    },],
    currTodo: "",
  },
  methods: {
    addTodo: function(){
      this.todos.push({name:this.currTodo,editing:false,complete:false});
      this.currTodo = "";
    },
    remove: function(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index,1);
    },
    edit: function(todo) {
      var index = this.todos.indexOf(todo);
      this.todos[index].editing = true;
    },
    save: function(todo) {
      var index = this.todos.indexOf(todo);
      this.todos[index].editing = false;
    },
    changeCheck: function(todo){
      if(todo.complete){
        todo.complete = false;
      } else {
        todo.complete = true;
      }
    }
  }
})

Vue.component('m-header', {
  props: ['user'],
  template: '<h2>Witajcie wszyscy: {{ user }} </h2>',
})

var innyComp = new Vue({
  el: '#innyComp',
  data: {
    userName: 'Zdzicho',
  }
})

var vueComp = new Vue({
  el: '#vueComp',
  components: {
    'my-header': {
      template: '<h2>Welcome User {{ userName }} </h2>',
      data: function(){
        return {
          userName:'Staszek'
        }
      }
    },
    'my-box':{
      template: ' <h3> tak to ja  </h3> '
    },
  }
})


Vue.component('dog', {
  template: '#dog-template',
  props: ['name', 'score'],
  methods: {
    voteDog: function(){
      this.score++;
    }
  }
})
 
var dogApp = new Vue({
  el: '#dogApp',
})
