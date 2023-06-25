 import Assignments from './Assignments.js';
 import Panel from './Panel.js';
 export default{
    components : {Assignments,Panel},
    template : /*javascript */`
    <div class="grid gap-6">
    <assignments></assignments>
    
    <panel>
    <template v-slot:heading>
    Hello People
    </template>
    <template>
    This is panel content
    </template>
    </panel>  

    <panel >EXTRA panel</panel>
    <panel > 
      <template #heading>
    Third Panel
    </template>
    <template>
    3rd panel content
    </template>
        <template #footer>
    3rd panel footer
    </template>
    </panel>
    </div>
    `,
}
