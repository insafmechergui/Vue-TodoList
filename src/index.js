import Vue from 'vue';
import App from './App'

new Vue({
    el:"#app",
    components:{App},
    template:'<App :state="state"/>',
    data:{
        state:{
            showDone:false,
        
        todos:[
            {
            text:"Work on React project",
            done:false,
        },
        {
            text:"Work on Vue project",
            done:true,
        },{
            text:"Work on Angular project",
            done:false,
        }
    
    ]
    }
},
});
