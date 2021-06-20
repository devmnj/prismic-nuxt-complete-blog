export default {
  title: 'Common components',
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<VueButton v-bind="$props"/>',
});


export const Primary= Template.bind({});
Primary.args={caption:'Primary'}

export const Header = () => '<Header />'
export const Footer = () => '<Footer />'

export const VueButton = () => '<VueButton caption="OK"/>'

export const Hero = () => '<Hero/>'

