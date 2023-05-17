var app = new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
        keyword: '',
        
    },
    //watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
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
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        },
    },
    computed:{
        // filteredList: function(){
        //     var list = [];
        //     for(var i in this.list){
        //         var listin = this.list[i];
        //         if(list.indexOf(this.keyword) !== -1){
        //             list.push(listin);
        //         }
        //     }
        //     return list;
        // },
        task: function(){
            // チェックが入っていないリストの数を表示したい
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        },
        total: function(){
            return this.list.length;
        },
    }
});