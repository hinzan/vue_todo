Vue.component('Todolist', {
   props: ['message','todo'],
   template: `
   <li>{{message}} {{todo}}</li>
   `
 })

 var app7 = new Vue({
   el: '#app-7',
   data: {
      message:"this is hinzan",
      newTodo:'New item',
      todo:[
         {id:1,text:"item1"},
         {id:2,text:"item2"}
      ]
   },
   methods:{
      addTodo:function(){
         this.todo.push({id:this.todo.length+1,text:this.newTodo});
         this.newTodo="";
      }
   }
 })

 Vue.component('Heading', {
   props: ['heading'],
   template: `
      <h1>{{heading}}</h1>
   `
 })

 var app = new Vue({
   el: '#app'
 })