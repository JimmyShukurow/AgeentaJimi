<template>
    <div class="header">
        <div class="logo">
            <img src="@/assets/logo.png" alt="Logo" >
            <div @click="toogleSidebar">
                <v-icon name="bars"/>
            </div>
        </div>
        <div class="right-corner">
            <div class="web-site">
                <a href="https://ageenta.com">
                    <v-icon name="globe"/> View Website
                </a>
            </div> 
            <div>
                name of user
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            sidebar:true,
        }
    },
    methods: {
        toogleSidebar(){
            this.$root.$emit('eventing', this.sidebar);
            this.sidebar = !this.sidebar;
        }
    }
}
</script>

<style scoped>
.header , .header div{
    background: #272727;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    color: blanchedalmond;
    position: sticky;
    top:0;
    z-index: 20;
}
.header img  {
    margin: 0 20px;
    width: 80px;
}
.right-corner div, .logo div {
    margin-right: 20px;
    display: flex;
    align-items: center;
    padding: 5px;
}
.right-corner div:hover {
    background:gray;
    cursor: pointer;
 
}
 a, a:hover, a:focus, a:active {
     text-decoration: none;
     color: inherit;
 }
 .logo div {
     margin-left: 50%;
 }
 </style>