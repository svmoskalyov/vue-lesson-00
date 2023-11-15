<template>
  <div :id="$style.app">
    <ApartmentsItem
      :descr="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      :imgSrc="`https://c4.wallpaperflare.com/wallpaper/427/193/66/evening-nordland-europe-starry-night-wallpaper-preview.jpg`"
    />
  </div>

  <!-- <h1>{{ title }}</h1> -->
  <!-- <Button @click="increments" outlined>Click me</Button> -->
  <!-- <DirectivesTest /> -->
  <!-- <StarRating :rating="3.5" /> -->

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";
// import HelloWorld from './components/HelloWorld.vue'
// import Button from "./components/Button.vue";
// import DirectivesTest from "./components/DirectivesTest.vue";
// import StarRating from "./components/StarRating.vue";

export default {
  name: "App",
  components: {
    ApartmentsItem,
    // HelloWorld
    // Button,
    // DirectivesTest,
    // StarRating,
  },
  data() {
    return {
      apartment: {
        id: "5cwtgf472gvd28csajhvcs8",
        title: "Apartment title",
        descr: "bla-bla-bla, bla-bla-bla, ..., bla-bla-bla, bla-bla-bla.",
        price: 1045,
        rating: 4.7,
        location: {
          city: "Odessa",
        },
        owner: {
          name: "Kosel",
          phone: "123-123-1234",
          email: "asd@gmail.com",
        },
      },
    };
  },
  // data() {
  //   return {
  //     amountOfClicks: 0,
  //   };
  // },
  // computed: {
  //   title() {
  //     return `Amount of clicks ${this.amountOfClicks}`;
  //   },
  // },
  // methods: {
  //   increments() {
  //     this.amountOfClicks += 1;
  //   },
  // },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
