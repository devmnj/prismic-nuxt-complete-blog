
export default {
  title: 'Prismic Slices'
}

function resolver({ sliceName, slice, i }) {
  return Slices[sliceName];
}
//  const page= await $prismic.api.getByUID("home", "home_page"),
// export const Hero = () => ({
//   template: '<slice-zone typ="home" :resolver="resolver"/>'
// })

export const TextSlice = () => ({
  template:''
})

