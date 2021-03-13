<template>

  <h2> Liste 1 </h2> 
  <ul>
    <div v-for="tache in taches" :key="tache.id" id="app" >

        <input type="checkbox" id="tache.id" name="tache.text" value="tache.id"> 

       <label for="tache.text" v-bind:style="tache.style" 
       >{{tache.text}}</label>
       <br/>
       <button v-show="showToDelete" v-on:click="deleteTask(tache.id)" >DeleteThis</button>
       <input type="text" v-show="showToModify" v-model="tache.text">
      
    </div>
  </ul>
  
  <button v-on:click="addTask" >Add</button>
  <button v-on:click="switchToDelete">Delete</button>
  <button v-on:click="deleteAllTask">Delete All</button>
  <button v-on:click="switchToModify">ModifyTask</button>
  

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
          showToModify : false,
          showToDelete:false
           
        }
      }
  ,methods: {
        deleteAllTask(){
             for(var i in this.taches){
                this.taches.splice(i)
             }
              },


        switchToModify(){
           if(this.showToModify==true) this.showToModify=false
          else this.showToModify=true
        }    
        ,

        deleteTask(i){
               this.taches.splice(i,1)
        },

           getRandom(min, max){
             return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        ,
        switchToDelete(){
           if(this.showToDelete==true) this.showToDelete=false
           else this.showToDelete=true
        },
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
  name: 'TodoList',
  components: {
    
  }
}
</script>


