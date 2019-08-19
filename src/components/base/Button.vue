<template>
  <button class="" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
}
</script>

<style lang="postcss" scoped>
button {
  @apply px-2 py-2 bg-gray-100 border border-gray-300 text-gray-700 font-medium;
}

button:hover {
  @apply bg-blue-600 text-white;
}

button:focus {
  @apply font-semibold;

  outline: none;
}

button.active {
  @apply bg-blue-600 text-white  border-blue-700;
}

/* button.active:hover {
} */
</style>
