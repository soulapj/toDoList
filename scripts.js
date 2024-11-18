const app = Vue.createApp({
    data() {
        return {
            arrTask: [],
            newTask: {
                status:false,
            },
        }
        
    },
    methods: {
        addTask(){
            if (this.newTask.name){
                this.arrTask.push(this.newTask);
                this.newTask = {
                    status:false,
                };
            } else {
                alert("remplissez le champ!!")
            }
        },
        deleteTask(){
            if (confirm("sur sur?")){
                this.arrTask.length = 0
            }
        },
        deleteOneTask(id){
            if (confirm("sur sur?")){
                this.arrTask.splice(id, 1)
            }
        },
        isCrossed(){
            console.log("salut")
            this.classList.toggle("crossed");
        }
    },
    computed:{
        hasTodos(){
            return this.arrTask.length > 0
        }
    },

    watch: {
        toDos:{
            deep:true,
            handler(){
                localStorage.setItem("list", JSON.stringify(this.arrTask))
            }
        }
    },

    created(){
        this.arrTask = localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):this.arrTask
    },
})
app.mount('#app');