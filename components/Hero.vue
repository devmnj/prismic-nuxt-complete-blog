<template>
  <section class="flex gap-2 mx-3  w-auto rounded-lg">
    <slot name="image">
      <img
        class="rounded-md object-contain w-2/6"
        src="@/assets/images/hero1.jpg"
        alt=""
      />
    </slot>
    <div class="">
      <slot name="content">
        <h1 class="font-semibold text-2xl m-6">e-Fruit basket</h1>
        <p class="m-6 w-auto truncate" id="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Partim cursu et
          peragratione laetantur,
        </p>
        <a id="button-wrapper " href="#" class="vue-btn ml-6">Read more</a>
      </slot>
    </div>
  </section>
</template>
<script>
export default {
 
  props: {},
};
</script>
