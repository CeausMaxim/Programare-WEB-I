// EX 1 and EX 2
/* const app = new Vue({
    el: '#application',
    data: {
        username: 'Ceaus Maxim!',
        year: new Date(),
    },
    computed: {
        age() {
            return new Date().getFullYear() - new Date(this.year).getFullYear();
        }
    }
}) */

// EX 3
const app = new Vue({
    el: '#app',
    data: {
        salary: 0,
        lang: "",
        exp: ""
    },
    watch: {
        lang() {
            this.salary = this.salaryProg(this.lang, this.exp);
        },
        exp() {
            this.salary = this.salaryProg(this.lang, this.exp);
        }
    },
    methods: {
        salaryProg(lang, exp) {
            let coef = 0;
            switch (lang) {
                case "JavaScript":
                    coef = 1;
                    break;
                case "Python":
                    coef = 0.7;
                    break;
                case "Java":
                    coef = 1.3;
                    break;
            }

            let BaseRate = 0;
            switch (exp) {
                case "1":
                    BaseRate = 10000;
                    break;
                case "2":
                    BaseRate = 12000;
                    break;
                case "3":
                    BaseRate = 13500;
                    break;
                case "4":
                    BaseRate = 14000;
                    break;
                case "5":
                    BaseRate = 15000;
                    break;
            }
            return BaseRate * coef;
        }
    }
})