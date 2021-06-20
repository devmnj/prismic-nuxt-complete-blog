import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faInfoCircle as fortawesomefreesolidsvgicons_faInfoCircle } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faInfoCircle)

    import  { faTwitter as fortawesomefreebrandssvgicons_faTwitter } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faTwitter)

    import  { faInstagram as fortawesomefreebrandssvgicons_faInstagram } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faInstagram)

    import  { faSlack as fortawesomefreebrandssvgicons_faSlack } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faSlack)

    import  { faYoutube as fortawesomefreebrandssvgicons_faYoutube } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faYoutube)

    import  { faGithub as fortawesomefreebrandssvgicons_faGithub } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faGithub)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
Vue.component('fa-layers-text', FontAwesomeLayersText)
