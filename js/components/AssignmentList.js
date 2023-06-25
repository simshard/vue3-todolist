import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment,AssignmentTags },

    template: /*javascript */ `
        <section v-show="show && assignments.length" class="w-60 bg-gray-700 p-4 border border-gray-600 rounded-lg">
            <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{assignments.length}})</span>
            </h2>
            <button v-show="canToggle" @click="show=false" >&times;</button>
           </div>
                <assignment-tags 
                    v-model:currentTag ="currentTag"
                    :initial-tags = "assignments.map(a => a.tag)"
                />

            <ul class="border  border-gray-600 divide-y divide-gray-600 mt-6">
               <assignment 
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>

            <slot></slot>
        </section> 
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle:{type:Boolean, default:false}
    },
    data(){
        return{
            currentTag : 'All',
            show : true
        };
    },
    computed:{
        filteredAssignments(){
            if (this.currentTag === 'All'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag=== this.currentTag);
        },
       
    }
}