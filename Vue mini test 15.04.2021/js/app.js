// EX 1 and EX 2
const app = new Vue({
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
})

// EX 3
/* var app = new Vue({
    el: '#app',
    data: {
        JS: 1,
        Python: 0.7,
        Java: 1.3,
        Exp: ''
    },
    computed: {
        salaryJs() {
            return Exp * this.JS
        }
    }
}) */