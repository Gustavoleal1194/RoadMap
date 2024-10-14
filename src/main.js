import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import MainTheme from '@/theme/MainTheme'
import App from '@/App.vue'
import router from '@/router'

import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Badge from 'primevue/badge'
import BlockUI from 'primevue/blockui'
import Button from 'primevue/button'
import Breadcrumb from 'primevue/breadcrumb'
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import DatePicker from 'primevue/datepicker'

import Dialog from 'primevue/dialog';

import FileUpload from 'primevue/fileupload'
import FloatLabel from 'primevue/floatlabel'
import Image from 'primevue/image'
import InputText from 'primevue/inputtext'
import InputOtp from 'primevue/inputotp'
import InputMask from 'primevue/inputmask'
import Panel from 'primevue/panel'
import PrimeVue from 'primevue/config'
import ProgressBar from 'primevue/progressbar'
import Ripple from 'primevue/ripple'
import Select from 'primevue/select'
import StyleClass from 'primevue/styleclass'
import Tag from 'primevue/tag'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import Tooltip from 'primevue/tooltip'
import ToastService from 'primevue/toastservice'
import 'primeicons/primeicons.css'


const app = createApp(App)

// ----------- GLOBAL COMPONENTS DECLARATIONS -----------
app.component('TheDialog',Dialog)
app.component('TheAccordion', Accordion)
app.component('AccordionPanel', AccordionPanel)
app.component('AccordionHeader', AccordionHeader)
app.component('AccordionContent', AccordionContent)
app.component('TheBadge', Badge)
app.component('BlockUI', BlockUI)
app.component('TheButton', Button)
app.component('TheBreadcrumb', Breadcrumb)
app.component('TheCard', Card)
app.component('TheChip', Chip)
app.component('DatePicker', DatePicker)
app.component('FileUpload', FileUpload)
app.component('FloatLabel', FloatLabel)
app.component('TheImage', Image)
app.component('InputMask', InputMask)
app.component('InputOtp', InputOtp)
app.component('InputText', InputText)
app.component('ThePanel', Panel)
app.component('ProgressBar', ProgressBar)
app.component('TheSelect', Select)
app.component('TheTag', Tag)
app.component('TheTextarea', Textarea)
app.component('TheToast', Toast)

// ----------- PRIME DECLARATIONS -----------
app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)
app.directive('tooltip', Tooltip)

app.use(createPinia())
app.use(PrimeVue, {
  riple: true,
  theme: {
    preset: MainTheme,
    options: {
      darkModeSelector: 'light'
    }
  },
  locale: {
    dateFormat: 'dd/mm/yy'
  }
})
app.use(router)
app.use(ToastService)

app.mount('#app')
