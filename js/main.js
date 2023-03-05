// import vTextarea from './components/vTextarea.js'
const App = {
    data(){
        return{
            currentpage:"catalog",
            // Всего слайдов
            // sliderAllCount: 4,
            // Номер активного слайда
            sliderActive: 0,
            // Шаг одного слайда = его длина
            sliderOffsetStep: 1100,
            // Список изображений
            sliderOffsetLeft:0,
            sliderList: [
                { name:'mesto1' ,     img: '/css/media/midagrabin-waterfalls.jpg'},      
                { name:'mesto2' ,     img: '/css/media/tseyskoe-gorge.jpg'},    
                { name:'mesto3' ,     img: '/css/media/midagrabin-waterfalls.jpg'},      
                { name:'mesto4' ,     img: '/css/media/tseyskoe-gorge.jpg'},      
            ],
        }
    },
    components: {
        // vKoropka,
        // vRegister,
    },
    methods: {
        // Prikol: function(){
        //     console.log("ladno")
        // },
        ChangeSlide: function(delta){
            if(delta+this.sliderActive >= this.sliderList.length)
            this.sliderActive=0
            else if (delta+this.sliderActive < 0)
            this.sliderActive = this.sliderList.length -1
            else
            this.sliderActive+=delta

            this.sliderOffsetLeft = this.sliderActive * this.sliderOffsetStep * -1
        }
    },
    created() {
        // this.Prikol
    },

}

Vue.createApp(App).mount('#app')