<template>
    <div class="header">
        <div>
            <img src="@/assets/logo.png" alt="Logo" >
            Text
        </div>
        <div class="right-corner">
            <div>
                View Website
            </div> 
            <div>
                name of user
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header , .header div{
    background: #272727;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: blanchedalmond;
}
.header img  {
    margin: 0 20px;
    width: 80px;
}
.right-corner div{
    margin-right: 20px;
}
</style>