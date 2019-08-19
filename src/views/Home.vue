<template>
  <div>
    <h1 class="mt-12 mb-4 text-blue-700 text-2xl text-left font-medium">
      Book gifts up to {{ budget }}€
    </h1>
    <div class="flex text-left">
      <div class="w-1/2 flex flex-col pr-2">
        <div class="flex items-stretch mb-4">
          <SummaryTextProvider
            :checkedBooks="checkedBooks"
            :books="books"
            :selectedPrice="selectedPrice"
            :budget="budget"
          >
            <p
              slot-scope="{ summaryText }"
              class="text-left text-sm w-1/2 text-black"
              v-html="summaryText"
            ></p
          ></SummaryTextProvider>

          <div class="w-1/2 text-xs">
            <Button class="w-1/2 h-full" :class="{ active: orderByAsc }" @click="orderByAsc = true"
              >Ascending</Button
            >
            <Button
              class="w-1/2 h-full"
              :class="{ active: !orderByAsc }"
              @click="orderByAsc = false"
              >Descending</Button
            >
          </div>
        </div>

        <label
          v-for="book of sortedBooks"
          :key="book.id"
          class="flex items-baseline relative border not-last:border-b-0 py-2 border-gray-400"
          :for="book.id"
        >
          <input
            :id="book.id"
            v-model="checkedBooks"
            type="checkbox"
            class="mx-3"
            :value="book"
            :disabled="
              selectedPrice + book.price > budget && !checkedBooks.find(({ id }) => id === book.id)
            "
          />
          <div class="flex-1 flex justify-between mr-3">
            {{ book.title }}
            <span>{{ convertToCurrency(book.price) }}€</span>
          </div></label
        >

        <!-- <CheckboxWithLabel
          v-for="book of sortedBooks"
          :key="book.id"
          :value="book"
          v-model="checkedBooks"
          :disabled="
            selectedPrice + book.price > budget && !checkedBooks.find(({ id }) => id === book.id)
          "
          >{{ book.title }} {{ book.price }}€</CheckboxWithLabel
        > -->
      </div>

      <SubmitForm :userData="userData" :formErrors="formErrors" :checkedBooks="checkedBooks">
        <template #fullnameInput>
          <TextInput
            v-model="userData.fullName"
            class="w-full"
            :class="{ 'border-red-400 border-2': formErrors.fullName }"
            aria-placeholder="Full name"
            placeholder="Full name"
            @blur="validateInputString($event.target.value, 'fullName')"
        /></template>
        <template #streetInput>
          <TextInput
            v-model="userData.location.street"
            class="w-7/12 inline"
            :class="{ 'border-red-400 border-2': formErrors.street }"
            aria-placeholder="Street"
            placeholder="Street"
            @blur="validateInputString($event.target.value, 'street')"
        /></template>

        <template #houseNumberInput>
          <TextInput
            v-model="userData.location.houseNumber"
            class="w-4/12 inline"
            :class="{ 'border-red-400 focus:border-red-400 border-2': formErrors.houseNumber }"
            aria-placeholder="House No."
            placeholder="House No."
            @blur="validateHouseNumber($event.target.value)"
          />
        </template>

        <template #zipInput
          ><TextInput
            v-model="userData.location.zip"
            :class="{ 'border-red-400 border-2': formErrors.zip }"
            maxlength="5"
            class="w-5/12 inline"
            aria-placeholder="zip"
            placeholder="ZIP"
            @blur="validateZip($event.target.value)"
        /></template>
        <template #cityInput
          ><TextInput
            v-model="userData.location.city"
            :class="{ 'border-red-400 border-2': formErrors.city }"
            class="w-6/12 inline"
            aria-placeholder="city"
            placeholder="City"
            @blur="validateInputString($event.target.value, 'city')"
        /></template>

        <template #summary>
          <SummaryTextProvider
            :checkedBooks="checkedBooks"
            :books="books"
            :selectedPrice="selectedPrice"
            :budget="budget"
          >
            <p
              slot-scope="{ summaryText }"
              class="text-left text-sm w-1/2 text-black"
              v-html="summaryText"
            ></p></SummaryTextProvider
        ></template>
      </SubmitForm>
    </div>
  </div>
</template>

<script>
import Button from '@/components/base/Button.vue'
import SubmitForm from '@/components/SubmitForm.vue'

import SummaryTextProvider from '@/components/utils/SummaryTextProvider.vue'
import TextInput from '@/components/base/TextInput.vue'
// import CheckboxWithLabel from '@/components/base/CheckboxWithLabel.vue'

export default {
  name: 'Home',
  components: {
    Button,
    SubmitForm,
    TextInput,
    SummaryTextProvider,
    // , CheckboxWithLabel
  },
  data() {
    return {
      userData: {
        fullName: '',
        fullNameValidator: 'validateInputString',
        location: {
          street: '',
          streetValidator: 'validateInputString',
          houseNumber: '',
          city: '',
          zip: '',
        },
      },
      formErrors: {},
      budget: 30,
      orderByAsc: true,
      checkedBooks: [],
      books: [
        {
          id: 0,
          title: 'Mastering Vue.js',
          price: 10,
        },
        {
          id: 1,
          title: 'Pro NodeJS',
          price: 13,
        },
        {
          id: 2,
          title: 'JavaScript',
          price: 17.5,
        },
      ],
    }
  },
  computed: {
    selectedPrice() {
      return this.checkedBooks.reduce((sum, book) => (sum += book.price), 0)
    },
    sortedBooks() {
      return this.books
        .slice()
        .sort((a, b) => (this.orderByAsc ? a.price - b.price : b.price - a.price))
    },
  },
  methods: {
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
