<template>
  <div>
    <Banner />
    <sub-section />
    <sub-section :rev-order="true">
      <img class="worker-bg" src="../../assets/sub/manpower.png" alt="Alborj Contract">
    </sub-section>
    <Contact />
  </div>
</template>

<script>
import SubSection from '~/components/SubSection.vue'
export default {
  components: { SubSection },
  head: {
    title: 'Alborj Group UAE Blogs | Manpower Service Providers in UAE',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Alborj Group UAE Blogs | specialize in car battery replacement, flat tire servicing, fuel delivery, towing service and jump start services in UAE'
      },

      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Alborj Group UAE Blogs | Manpower Service Providers in UAE'
      },

      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Alborj Group UAE Blogs | specialize in car battery replacement, flat tire servicing, fuel delivery, towing service and jump start services in UAE'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
</style>
