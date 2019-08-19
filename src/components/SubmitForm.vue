<template>
  <form class="block w-1/2 pl-2" @submit.prevent="order">
    <div class="mb-4">
      <slot name="fullnameInput" />
      <ErrorMessage v-if="formErrors.fullName" class="mt-2">{{ formErrors.fullName }}</ErrorMessage>
    </div>

    <div class="w-full flex flex-wrap justify-between mb-4">
      <slot name="streetInput" />
      <slot name="houseNumberInput" />
      <div v-if="formErrors.street || formErrors.houseNumber" class="mt-2">
        <ErrorMessage v-if="formErrors.street">{{ formErrors.street }}</ErrorMessage>
        <ErrorMessage v-if="formErrors.houseNumber">{{ formErrors.houseNumber }}</ErrorMessage>
      </div>
    </div>

    <div class="w-full flex flex-wrap justify-between mb-4">
      <slot name="zipInput" />
      <slot name="cityInput" />
      <div v-if="formErrors.zip || formErrors.city" class="mt-2">
        <ErrorMessage v-if="formErrors.zip">{{ formErrors.zip }}</ErrorMessage>
        <ErrorMessage v-if="formErrors.city">{{ formErrors.city }}</ErrorMessage>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <slot name="summary" />
      <Button class="active" :disabled="checkedBooks.length === 0" type="submit"
        >Verify and order</Button
      >
    </div>
  </form>
</template>

<script>
import Button from '@/components/base/Button.vue'
import ErrorMessage from '@/components/base/ErrorMessage.vue'

export default {
  name: 'SubmitForm',
  components: {
    Button,
    ErrorMessage,
  },
  props: {
    userData: { type: Object, default: () => ({}) },
    checkedBooks: { type: Array, default: () => [] },
    formErrors: { type: Object, default: () => ({}) },
  },
  methods: {
    order() {
      const { fullName, location } = this.userData

      this.checkFormValues({ fullName, ...location })
    },

    checkFormValues(inputValues) {
      for (const entry of Object.entries(inputValues)) {
        if (!entry[1]) {
          this.$set(
            this.formErrors,
            entry[0],
            `Please provide a ${this.camelCaseToWords(entry[0])}.`
          )
        } else {
          this[`${entry[0]}Validator`](entry[1])
        }
      }
    },

    camelCaseToWords(text) {
      return text.replace(/([A-Z])/g, ' $1')
    },

    convertToCurrency(number) {
      return number % 1 === 0 ? number : number.toFixed(2)
    },

    validateInputString(string, key = 'fullName') {
      const valid = string && string.length <= 50
      if (!valid) {
        this.$set(this.formErrors, key, `Please provide a valid ${this.camelCaseToWords(key)}`)
      } else {
        this.$set(this.formErrors, key, '')
      }
      return valid
    },

    validateHouseNumber(string) {
      const regex = string.match(/^[1-9][0-9]{0,3}[a-zA-Z]?$/)
      const valid = regex && regex[0] === string
      if (!valid) {
        this.$set(this.formErrors, 'houseNumber', 'Please provide a valid house number')
      } else {
        this.$set(this.formErrors, 'houseNumber', '')
      }
      return valid
    },

    validateZip(string) {
      const regex = string.match(/^[0-9]{5,5}$/)
      const valid = regex && regex[0] === string
      if (!valid) {
        this.$set(this.formErrors, 'zip', 'Please provide a valid zip')
      } else {
        this.$set(this.formErrors, 'zip', '')
      }
      return valid
    },
  },
}
</script>
