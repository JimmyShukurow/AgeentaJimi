<template>
  <div>
   
    <main>
      <header>
        <div class="header"> 
          <h2>New Property</h2> <span class="close-button" @click="closeCreateProperty"><v-icon name="times-circle"/></span>
        </div>
      </header>

      <section>
        <div class="input">
          <label for="title"><h3>Title</h3> </label>
          <input type="text" name="title" placeholder="Title">
        </div>
        <div class="input">
          <label for="description"><h3>Description</h3> </label>
          <textarea name="description"  cols="20" rows="5" placeholder="Short Description"></textarea>
        </div>
        <div class="input">
          <label for="content"><h3>Content</h3> </label>
          <textarea name="content"  cols="20" id="content" rows="10" ></textarea>
        </div>
        <div class="input">
          <label for="city"><h3>City</h3> </label>
          <select name="city" >
            <option value=""> Select City</option>
            <option value="1"> Istanbul </option>
            <option value="2"> Istanbul </option>
            <option value="3"> Istanbul </option>
            <option value="4"> Istanbul </option>
          </select>
        </div>
        <div class="details">
          <div class="bedrooms">
            <label for="bedrooms"> Bedroom Numbers</label>
            <input type="number">
          </div>
          <div class="bedrooms">
            <label for="bedrooms"> Bedroom Numbers</label>
            <input type="number">
          </div>
          <div class="bedrooms">
            <label for="bedrooms"> Bedroom Numbers</label>
            <input type="number">
          </div>
          <div class="bedrooms">
            <label for="bedrooms"> Bedroom Numbers</label>
            <input type="number">
          </div>
        </div>
      </section>
      <button> Submit </button>
    </main>
  </div>
</template>

<script>
export default {
methods: {
  closeCreateProperty(){
    this.$root.$emit('close', false);
  }
}
}
</script>

<style scoped>

  main {
    padding: 10px 20px 20px 20px;
    border-radius: 10px;
    background:#d5e2e1;
    box-shadow:   9px 9px 18px #828a89, -9px -9px 18px #ffffff;
    /* width: 80rem; */
    display: block;
  }
  section {
    margin: 20px;
    /* width: 100%; */
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  header {
    margin: 20px;
  }
  .close-button{
    padding: 10px;
  }
  .close-button:hover {
    cursor: pointer;
  }
  label {
    display: block;
  }
  textarea {
    resize: vertical;
  }
  input, textarea, select {
    color: black;
    font-size: 16px;
    padding: 10px;
    border-radius: 8px ;
    border: 0;
    background: #f8f6f6;
    outline: none;
    box-shadow:  inset 5px 5px 5px #999a9e,  -5px -5px 5px #d8e5ff;
  }
  
  .input h3, .details h3 {
    margin: 0 0 5px 0;
    float: left;
    display: flex;
    width: 100%;
  }
   input,  textarea, select {
    display: block;
    margin: 0;
    float: left;
    width: 95%;
  }
  select {
    display: flex;
    margin-bottom: 50px;
    float: left;
    width: 40%;
  }
  #content {
    resize: none;
  }

  .details {
    display: flex;
    width: 100%;
  }
  .bedrooms {
    display: block;
    width: 20%;
    margin-right: 3rem;
  }
  button {
    font-size: 16px;
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
    border: 0  ;
    color: white;
    outline: none;
    background: #7FC0CC;
    box-shadow: inset 5px 5px 10px #334d52, -5px -5px 10px #cbffff;
  }

  button:hover {
    cursor: pointer;
    box-shadow:  5px 5px 10px #334d52, -5px -5px 10px #cbffff;

  }
</style>