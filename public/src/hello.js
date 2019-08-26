new Vue({
    el: '#apka',
    data: {
        appTitle: "Pierwsza aplikacja Vue!",
        mpage:'http://google.pl',
        message: 'copyright@Stanisław Oljenik',
        akcja:'kliknij'
    },
    methods:{
        zmienKolor(){
            const kom = document.getElementById('kom');
            if(kom.style.display === 'block'){
                kom.style.display="none";
            }else{
                kom.style.display="block";
            }
        }
    }
});

