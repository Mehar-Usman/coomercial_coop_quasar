<template>
  <div>
    <ishoop-cards :obj_data="newData" :title="component1Title" :description="component1Description" :image="component1Image"  />
    <ishoop-cards :title="component2Title" :description="component2Description" :image="component2Image" :reverse="true" />
    <ishoop-cards :title="component2Title" :description="component2Description" :image="component2Image" />
  </div>
</template>

<script>


import IshoopCards from "components/ishoopCards.vue";

export default {
  components: {IshoopCards},

  data() {
    return {
      component1Title: 'What Is iShopEco?',
      component1Description: 'iShopEco is a search and review platform of vetted businesses with products and services in over 300 categories that meet published environmental sustainability criteria. We help you shop better for more eco-friendly and healthy options.',
      component1Image: 'https://www.ishopeco.com/images/screen-laptop.webp',
      component2Title: 'Component 2 Title',
      component2Description: 'Component 2 Description',
      component2Image: 'https://www.ishopeco.com/images/screen-laptop.webp',
      newData: {
        title: 'this is title',
        image: 'image',
        test: 'test',
      }
    }
  }
};
</script>
