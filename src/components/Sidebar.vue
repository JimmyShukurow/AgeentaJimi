<template>
    <div :class="{nav:open, 'sidebar-closed':closed}">
        <div class="sidebar">
            <router-link to="/">             <v-icon name="home"/> <span class="nav-name">Dashboard</span> </router-link>
            <router-link to="/pages">        <v-icon name="book"/> <span class="nav-name">Pages</span> </router-link>
            <div class="blog">
                <div  @click="toggleClass(0, 'submenu1')"><router-link to="/blog"><v-icon name="edit"/> <span class="nav-name">Blog</span><v-icon :class="submenu_opened[0].open ? 'arrow-open':'arrow'" name="chevron-left"/></router-link></div>
                    <div :class="submenu_opened[0].open  ? 'submenu-open1' : 'submenu1'" id="submenu1">
                        <router-link to="/real-estates">Categories</router-link>
                        <router-link to="/real-estates">Tags</router-link>
                       
                    </div>
            </div>
            <div class="real-estate">
                <div  @click="toggleClass(1, 'submenu2')"><router-link to="/real-estates"> <v-icon name="bed"/> <span class="nav-name"> Real Estate </span> <v-icon :class="submenu_opened[1].open ? 'arrow-open':'arrow'" name="chevron-left"/></router-link></div>
                    <div :class="submenu_opened[1].open ? 'submenu-open2' : 'submenu2'" id="submenu2">
                        <router-link to="/properties">Properties</router-link>
                        <router-link to="/features">Features</router-link>
                        <router-link to="/facilities">Facilities</router-link>
                        <router-link to="/categories">Categories</router-link>
                        <router-link to="/types">Types</router-link>
                        <router-link to="/reviews">Reviews</router-link>
                        <router-link to="/settings">Settings</router-link>
                    </div>
            </div>
            <router-link to="/testimonials"> <v-icon name="comments"/> <span class="nav-name"> Testimonials </span> </router-link>
            <router-link to="/static-blocks"><v-icon name="code"/> <span class="nav-name">Static Blocks </span> </router-link>
            <router-link to="/newsletters">  <v-icon name="newspaper"/> <span class="nav-name">Newsletters</span> </router-link>
            <router-link to="/consults">     <v-icon name="headset"/> <span class="nav-name">Consults</span> </router-link>
        </div>
    </div>
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
            open: true,
            closed: false,
            submenu_opened: [{"open":false}, {"open":false}],
        }
    },
    mounted(){
        this.$root.$on('eventing', data => {
            this.open = data,
            this.closed = !data
    });
    },
    methods: {
        toggleClass(index, id) {
            this.submenu_opened[index].open = !this.submenu_opened[index].open;
            if(this.submenu_opened[index].open == false){
                var x = document.getElementById(id);
                setTimeout(function(){x.style.display = "none"}, 300);
            } else{
                document.getElementById(id).style.display = "block";
            }
        }
    }

}
</script>

<style scoped>
    .sidebar {
        align-items: center;

    }
    .sidebar a {
        display: block;
        padding: 10px;
        color: #e6e6e6;
        text-decoration: none;
        border-bottom: 1px outset #e6e6e641;
        z-index: 15;
        position: relative;
        background: #2D3737 ;
    }
    a:hover:not(.router-link-exact-active )  {
        background: rgb(151, 77, 77);
    } 
    .router-link-exact-active {
        background: rgba(255, 0, 0, 0.596)!important;
    }
    .arrow {
        float: right;
    }
    .arrow-open {
        float: right;
        transform: rotate(-90deg);
    }

    .sidebar-closed {
        width: 50px;
        left: -200px;
    }
    .nav {
        width: 240px;
        background: #2D3737;
        display: inline-block;
        vertical-align: top;
        height: 100%;
        overflow: hidden;
    }
    .submenu1 {
        animation-name: close1;
        animation-duration: 0.3s;
        animation-timing-function: ease-in;
        height: 0;
        display: none;
        border-bottom: 1px outset #e6e6e641;
    }
    .submenu-open1 {
        transform-origin: top center;
        animation-name: open1;
        animation-duration: 0.3s;
        animation-timing-function: ease-in;
        height: 76px;
        border-bottom: 1px outset #e6e6e641;
    }

    @keyframes open1 {
        from { height: 0;}
        to { height: 76px;}
    }
    @keyframes close1 {
        from { height: 76px; }
        to { height: 0; }
    }


    .submenu2 {
        animation-name: close2;
        animation-duration: 0.3s;
        animation-timing-function: ease-in;
        height: 0;
        display: none;
        border-bottom: 1px outset #e6e6e641;
    }
   
    .submenu-open2 {
       transform-origin: top center;
        animation-name: open2;
        animation-duration: 0.3s;
        animation-timing-function: ease-in;
        height: 266px;
        border-bottom: 1px outset #e6e6e641;
    }
    @keyframes open2 {
        from { height: 0;}
        to { height: 266px;}
    }
    @keyframes close2 {
        from { height: 266px; }
        to { height: 0; }
    }
    .submenu-open1 a, .submenu1 a, .submenu-open2 a, .submenu2 a {
        border-bottom: none;
        padding-left: 20px
    }
  
    

</style>