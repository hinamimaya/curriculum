var app = new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
        keyword: '',
        searchResult: [],
        
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
            var toString = Object.prototype.toString;
            console.log(toString.call('searchList'));
            // let searchResult = [];
            // for(let i in this.searchResult){
            //     let searchList = new String(this.searchResult[i]);                
            //     if(searchList.indexOf(this.keyword) !== -1){
            //         searchResult.push(searchList);
            //     }
            // }

            // return this.searchResult;
            let list = [];
            for(let i in this.list){
                let searchList = new String(this.list[i]);
                if(searchList.indexOf(this.keyword) !== -1){
                    list.push({
                        text: this.keyword, 
                        isChecked: false,
                    });
                }
            }
            return list;                           
        }
    }
    
});