new Vue({
    el: '#komentarz',
    data: {
    formLightbox: false,
    showFeedback: true,
    akcja:'ZAMKNIJ',
    },
    methods: {
    closeFeedbackLightbox() {
        this.showFeedback = false;
        console.log('jestem');
    },
    zamknijOkno(){
            const kom = document.getElementById('komentarz');
            kom.style.display = "none";
    }
    },
    mounted() {
    const container = document.querySelector('.user-app');
    this.formLightbox = container.getAttribute('data-lightbox') === 'true';
    }
    });
    
