export default{
    template:
    `       <form @submit.prevent="add">
                <div class="p-2 border border-gray-600">
                <input v-model="newAssignment" placeholder="New Assignment..." class="text-black">
                <button type="submit" class="ml-2 ">Add</button>
                </div>
            </form>
    `,
 
    data(){
        return{
            newAssignment:''
        }
    },
    methods:{
        add(){
            this.$emit('add',this.newAssignment); 
            this.newAssignment = '';    
        }
                
        }
    

}