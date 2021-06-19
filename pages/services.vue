<template>
  <div>
    <Banner />
    <sub-section :title="subSections[0].title" :desc="subSections[0].desc" />
    <sub-section :title="subSections[1].title" :desc="subSections[1].desc" :rev-order="true">
      <img class="worker-bg" src="assets/sub/manpower.png" alt="Alborj Contract">
    </sub-section>
    <Contact />
  </div>
</template>

<script>
import SubSection from '~/components/SubSection.vue'
export default {
  components: { SubSection },
  data () {
    return {
      subSections: [
        {
          key: 'section_1',
          title: 'MANPOWER SUPPLY',
          desc: 'As a Manpower Supply Company, is created and developed to help businesses in the entire UAE in acquiring the right personnel to meet their business needs. Al Borj leverages an international talent acquisition network to identify, qualify, recruit and integrate world-class talent in a high performing corporate environment.',
          list: [
            'SUPERVISOR',
            'FOREMAN',
            'CHARGE HAND',
            'WELDER',
            'FABRICATOR',
            'ELECTRICIAN',
            'DUCTMAN',
            'PLUMBER',
            'PIPE FITTER',
            'INSULATOR',
            'ASSIST TECHNICIANS',
            'HELPERS'
          ]
        }, {
          key: 'section_2',
          title: 'MEP SUBCONTRACTING',
          desc: 'As a continuous expansion of the range of the services that AL Borj Group provides to our clients which are intended to be specialized in the design and execution of mechanical, electrical, and plumbing projects.'
        }
      ]
    }
  },
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
