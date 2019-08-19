<script>
export default {
  props: {
    checkedBooks: { type: Array, default: () => [] },
    books: { type: Array, default: () => [] },
    selectedPrice: { type: Number, default: 0 },
    budget: { type: Number, default: 30 },
  },

  computed: {
    summaryText() {
      return `${this.checkedBooks.length} of ${this.books.length} Selected<br />${this.selectedPrice}€ of
            ${this.budget}€`
    },
  },

  render() {
    return this.$scopedSlots.default({
      summaryText: this.summaryText,
    })
  },
}
</script>
