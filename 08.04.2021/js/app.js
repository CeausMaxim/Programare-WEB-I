const app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        operator: ""
    },
    computed: {
        sum() {
            return parseInt(this.a) + parseInt(this.b);
        },
        dif() {
            return parseInt(this.a) - parseInt(this.b);
        },
        mul() {
            return parseInt(this.a) * parseInt(this.b);
        },
        div() {
            return parseInt(this.a) / parseInt(this.b);
        }
    }
})