var app = new Vue({
    el: '#app',
    data: {
        keyword: "",
        list: [],
        addText: '',        
    },
    //watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        },
        searchResult: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("searchResult", JSON.stringify(this.searchResult));
            },
            deep: true
        },      
        
    },
    //マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText, 
                    isChecked: false,
                });
            }
            this.addText = '';
            // var toString = Object.prototype.toString;
            // console.log(toString.call('isChecked'));
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        },
    },
    computed:{
        task: function(){
            let count = 0;
            let list = this.list;
            let length = list.length;
            if(this.list[0] !== undefined){
            console.log(this.list[0].isChecked);}
            for(var i = 0; i < length; i++){
                if(!list[i].isChecked){
                    count++;
                }
            }
            return count;
        },
        total: function(){
            return this.list.length;
        },
        search: function(){

            let searchList = []; 
            for(let i = 0;i < this.list.length; i++){
                if(this.list[i].text.indexOf(this.keyword) > -1){
                    searchList.push(this.list[i].text);
                };
            }
            return searchList;

            // for(let i in this.list){
            //     let searchList = new String(this.list[i]);
            //     if(searchList.indexOf(String(this.keyword)) !== -1){
            //         console.log(searchList.indexOf(this.keyword));
            //         list.push(searchList);
            //     }
            // }
            // return list;                           
        },
    }
    
});