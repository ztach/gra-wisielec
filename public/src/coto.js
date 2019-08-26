new Vue({
    el: '#coto',
    data: {
        text: "pokaż treść dodatkową",
        akcja:'ukryj',
        loggedIn:false
    },
    methods:{
        zmienKolor(){
            const coto = document.getElementById('ukryty');
            if(coto.style.display === 'block'){
                coto.style.display="none";
            }else{
                coto.style.display="block";
            }
        },
        zamknijOkno(){
        const coto = document.getElementById('coto');
        coto.style.display = "none";
        },
        pokazOkno(){
            console.log(coto)
        }

    }
});
