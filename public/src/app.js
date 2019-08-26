new Vue({
    el: '.books-app',
    data: {
        formLightbox: false,
        showFeedback: true
    },
    methods: {
        closeFeedbackLightbox() {
            this.showFeedback = false;
        }
    },
    mounted() {
        const container = document.querySelector('.books-app');
        console.log(container);
        console.log('PRZED formLightbox = ' + this.formLightbox);
        console.log('PRZED showFeedback = ' + this.showFeedback);
        this.formLightbox = container.getAttribute('data-lightbox') === 'true';
        console.log('PO formLightbox = ' + this.formLightbox);
        console.log('PO showFeedback = ' + this.showFeedback);
    }
});