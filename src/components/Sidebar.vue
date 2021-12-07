<template>
    <div :class="{nav:open, 'sidebar-closed':closed}">
        <div class="sidebar">
            <router-link to="/">             <v-icon name="home"/> <span class="nav-name">Dashboard</span> </router-link>
            <router-link to="/pages">        <v-icon name="book"/> <span class="nav-name">Pages</span> </router-link>
            <router-link to="/blog">         <v-icon name="edit"/> <span class="nav-name">Blog</span>  <v-icon class="arrow" name="chevron-left"/></router-link>
            <router-link to="/real-estates"> <v-icon name="bed"/> <span class="nav-name"> Real Estate </span> <v-icon class="arrow" name="chevron-left"/></router-link>
            <router-link to="/pages">        <v-icon name="comments"/> <span class="nav-name"> Testimonials </span> </router-link>
            <router-link to="/static-blocks"><v-icon name="code"/> <span class="nav-name">Static Blocks </span> </router-link>
            <router-link to="/newsletters">  <v-icon name="newspaper"/> <span class="nav-name">Newsletters</span> </router-link>
            <router-link to="/consults">     <v-icon name="headset"/> <span class="nav-name">Consults</span> </router-link>
            <router-link to="/pages">        <v-icon name="users"/> <span class="nav-name">Accounts</span></router-link>
            <router-link to="/pages">        <v-icon name="archive"/> <span class="nav-name">Packages</span></router-link>
            <router-link to="/pages">        <v-icon name="image"/> <span class="nav-name">Simple Sliders</span></router-link>
            <router-link to="/pages">        <v-icon name="envelope"/> <span class="nav-name">Contacts</span></router-link>
            <router-link to="/pages">        <v-icon name="credit-card"/> <span class="nav-name">Payments</span></router-link>
            <router-link to="/pages">        <v-icon name="globe"/> <span class="nav-name">Locations</span></router-link>
            <router-link to="/pages">        <v-icon name="photo-video"/> <span class="nav-name">Media</span></router-link>
            <router-link to="/pages">        <v-icon name="paint-brush"/> <span class="nav-name">Appearence</span></router-link>
            <router-link to="/pages">        <v-icon name="plug"/> <span class="nav-name">Plugins</span></router-link>
            <router-link to="/pages">        <v-icon name="language"/> <span class="nav-name">Translations</span></router-link>
            <router-link to="/pages">        <v-icon name="cogs"/> <span class="nav-name">Settings</span></router-link>
            <router-link to="/pages">        <v-icon name="user-shield"/> <span class="nav-name">Platform Admisnitrations</span></router-link>
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
        }
    },
    mounted(){
        this.$root.$on('eventing', data => {
            this.open = data,
            this.closed = !data
    });
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
    }
    a:hover:not(.router-link-exact-active )  {
        background: rgb(48, 47, 47);
    } 
    .router-link-exact-active {
        background:	#ff0000;
    }
    .arrow {
        float: right;
    }

    .sidebar-closed {
        width: 50px;
        left: -200px;
    }
    .nav {
        width: 225px;
        background: rgb(61, 61, 60);
        display: inline-block;
        vertical-align: top;
        height: 100%;
        overflow: auto;
    }
</style>