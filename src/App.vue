<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2> Liste 1 </h2> 
  <ul>
    <div v-for="tache in taches" :key="tache.id" id="app" >
       <input type="checkbox" id="tache.id" checked="true" value="tache.id">
       
       <label for="tache.text" v-bind:style="tache.style" >{{tache.text}}</label>
       <br/>
       <br/>
    </div>
  </ul>
  
  <button v-on:click="addTask" >Add</button>
  <button v-on:click="deleteTask()">Delete</button>

</template>

<script>

export default {
  data() {
        return {
         taches : [
                {
                  id: 1,
                  text : "Tache 1",
                  style: "color:blue"
                },
                {
                  id: 3,
                  text : "Tâche 2",
                  style: "color:red"
                },
                {
                  id:32,
                  text : "tâche 3",
                  style: "color:yellow"
                  }    
                ],

          
          colors : ["yellow","green","red","blue","orange"],
          show:false   
        }
      }
  ,methods: {
        deleteTask(){
          for(var i in this.taches){
              if(document.getElementById("Tâche 2").checked == true){
                  delete this.taches[i]
                }
              }
            
        },

        switchAdd(){
          if(this.show==true) this.show=false
          else this.show=true
        },
           getRandom(min, max){
             return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        ,

        addTask(){
           var id = this.taches.length + 1
           var text = 'Tâche ' + id
           var style = "color:"+this.colors[this.getRandom(0,4)]
           var array = {"id":id,"text":text,"style":style}
           this.taches.push(array)
        }  
    }
  ,computed: {
      },
  name: 'App',
  components: {
    
  }
}
</script>



