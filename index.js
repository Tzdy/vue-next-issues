window.onload = function() {
    const app = Vue.createApp({
        data() {
            return {
                items: []
            }
        },
        methods: {
            addItem() {
                let item = {
                    text: 'apple'
                }
                window.o = this
                this.items.push(item)
                setTimeout(() => {
                    item.text = 10
                }, 1)
            }
        }
    })
    app.mount('#app')
}