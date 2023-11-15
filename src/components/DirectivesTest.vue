<template>
  <div v-if="isVisible">
    <h1>Directives</h1>
    <h1 v-show="false">Directives show</h1>

    <ul>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>

    <ul>
      <template v-for="fruit in fruits">
        <li v-if="fruit === 'banana'" :key="fruit">{{ fruit }}</li>
      </template>
    </ul>

    <ul>
      <li v-for="(car, key) in cars" :key="key">
        {{ key + " - " + car.color }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DirectivesTest",
  data() {
    return {
      isVisible: true,
      fruits: ["kiwi", "banana", "apple"],
      cars: {
        audi: {
          color: "red",
        },
        bmw: {
          color: "black",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
