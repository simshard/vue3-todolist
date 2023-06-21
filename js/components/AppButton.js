export default {
    template : `
        <button 
        :class = "{
             'border rounded px-5 py-2 disabled:cursor-not-allowed' :true,
             'bg-blue-500 hover:bg-green-100' : type === 'primary',
             'bg-yellow-500 hover:bg-yellow-100' : type === 'secondary',
             'bg-gray-200 hover:bg-gray-100' : type === 'muted',
             'isLoading' : processing
        }"
         :disabled = "processing">
            <slot />
        </button>
    `,
    props:{
        type :{
            type: String,
            default : 'primary'
        },
        processing :{
            type:Boolean,
            default : false
        }

    } 
}