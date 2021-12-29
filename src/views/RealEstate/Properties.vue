<template>
  <div>
        <h1> 
            This Is properties
        </h1>
        <main>
          <header>
              <div>
                <button class="bulk-actions"> Bulk Actions  <v-icon name="caret-down"/> </button>
                <button class="filters">  Filters <v-icon name="sort-amount-down-alt"/> </button>
                <span class="search">
                  <input  placeholder="Search ..."> <i><v-icon name="search"/></i> 
                </span>
              </div>
              <div>
                <button class="create"  @click="openCreateProperty"> <v-icon name="plus"/> Create </button>
                <button class="reload"> <v-icon name="sync-alt"/>  Reload </button>
              </div>
          </header>
        <table>
          <thead>
            <tr>
              <th> Cell 1</th>
              <th>Cells</th>
              <th>Cells</th>
              <th>Cells</th>
              <th>Cells</th>
              <th>Cells</th>
            </tr>
          </thead>
          <tr>
            <td>Cells </td>
            <td>Cells </td>
            <td>Cells </td>
            <td>Cells </td>
            <td>Cells </td>
            <td>Cells </td>
          </tr>
          <tr>
            <td>Cells</td>
            <td>Cells</td>
            <td>Cells</td>
            <td>Cells</td>
            <td>Cells</td>
            <td>Cells</td>
          </tr>
        </table>
        </main>
        <div :class=" open ? 'create-property-open' : 'create-property' ">
          <Create />
        </div>
  </div>
</template>

<script>
import Create from './Create.vue'
export default {
  components :{
    Create,
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    openCreateProperty() {
        this.open = true
    }
  },
  mounted() {
    this.$root.$on('close', data => {
      this.open = data
    });
  }
}
</script>

<style scoped>

  main {
    margin: 20px;
    border-radius: 10px;
    background:#d5e2e1;
    box-shadow:   9px 9px 18px #828a89, -9px -9px 18px #ffffff;
    display: flex;
    flex-direction: column;
  }

  header {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #6d6b6b4d;
  }
  button {
    font-size: 16px;
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
    border: 0  ;
    color: white;
    outline: none;
  }
  button:hover {
    cursor: pointer;
  }
  .search input {
    color: black;
    font-size: 16px;
    padding: 10px;
    margin: 5px ;
    border-radius: 8px ;
    border: 0;
    outline: none;
    box-shadow:  inset 5px 5px 5px #999a9e, -5px -5px 5px #d8e5ff;
    }
  .search i {
    background: white;
    padding: 10px ;
    border-radius: 8px;
    box-shadow:  5px 5px 5px #64697f,-5px -5px 5px #d8e5ff;
  }

  /* header-buttonts */
  .bulk-actions {
    background: #9EA7C9;
    box-shadow:  inset 5px 5px 5px #64697f, -5px -5px 5px #d8e5ff;

  }
  .bulk-actions:hover{
    box-shadow:  5px 5px 5px #64697f,-5px -5px 5px #d8e5ff;
  }

  .filters {
    background: #7FC0CC;
    box-shadow: inset 5px 5px 10px #334d52, -5px -5px 10px #cbffff;
  }
  .filters:hover {
    box-shadow:  5px 5px 10px #334d52, -5px -5px 10px #cbffff;
  }

  .create {
    background: #518C77;
    box-shadow: inset 5px 5px 5px #203830, inset -5px -5px 5px #82e0be;
  }
  .create:hover {
    box-shadow:  5px 5px 5px #203830, -5px -5px 5px #82e0be;
  }

  .reload {
    background: #00AAA6;
    box-shadow: inset 3px 3px 10px #004442, inset -3px -3px 10px #00ffff;
  }
  .reload:hover {
    box-shadow:  3px 3px 5px #004442,-3px -3px 5px #00ffff;
  }
  .create-property {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -100%;
    z-index: 20;
    animation-name: close-create-properties;
    animation-duration: 1s;
    animation-timing-function: ease-in;
  }
  .create-property-open {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10%;
    z-index: 20;
    animation-name: open-create-properties;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
  }

  @keyframes open-create-properties {
      from { top: -100%;}
      to { top: 10%;}
  }
  @keyframes close-create-properties {
      from { top: 10%;}
      to { top: -100%;}
  }
  table {
    background: #9EA7C9;
    border-radius: 10px;
    margin: 10px;
  }
 
  td, th {
    padding: 20px;
  }
</style>