var app = new Vue ({
    el: "#app",
    data: {
        headCopy: "テキスト表示",
        error_class: "error mb-3",
        primary: "button-primary",
        now : "00:00:00",
        prefs:[
            {name: '北海道'},
            {name: '青森'},
            {name: '岩手'},
            {name: '宮城'},
            {name: '秋田'},
            {name: '山形'},
            {name: '福島'},
        ]
    },
    methods : {
        time: function(e) {
            var date = new Date();
            this.now = 
                date.getHours()+"時"
                +date.getMinutes()+"分"
                +date.getSeconds()+"秒";
        },

        shuffle: function() {
            this.prefs =
                _.shuffle(this.prefs);
        }
    }
});