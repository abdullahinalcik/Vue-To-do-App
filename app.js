const app =Vue.createApp({
    data(){
        return{
            list:[
                {id:1, text:"Vue to do list 1. element",checked:false},
                {id:2, text:"Vue to do list 2. element",checked:false},
                {id:3, text:"Vue to do list 3. element",checked:false},
                {id:4, text:"Vue to do list 4. element",checked:false},
                {id:5, text:"Vue to do list 5. element",checked:false}
            ]
        };
    },
   methods:{
    addList(e){
        this.list.push({id:new Date().getTime(),
            text: e.target.value,
            checked:false
            })
        e.target.value=""
        // console.log("addlistfonks");
       
    },
    addListBtn(){
        const inputText=document.getElementById("inputText")
        this.list.push({id:new Date().getTime(),
            text: inputText.value,
            checked:false
            })
        inputText.value=""
        // console.log("addlistBtnfonks");
       
    },

    removeItem(item){
        this.list=this.list.filter(todo=>todo.id!=item.id)
    }

   },
           
}).mount("#app")