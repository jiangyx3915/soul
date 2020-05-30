/*
 * @LastEditors: jiang yixin
 * @Author: jiang yixin
 */ 
new Vue({
    el: '#app',
    data: {
        urlFormVisible: false,
        form: {
            url: '',
            name: '',
            category: ''
        }
    },
    created () {
    },
    computed: {},
    methods: {
        addSite: function() {
            console.log('232323')
            this.urlFormVisible = false;
        }
    }
});