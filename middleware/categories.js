export default function (context) {
  if (context.$store.categories.isLoaded === false) {
    context.$store.dispatch('categories/loadCategories');
  }
}
