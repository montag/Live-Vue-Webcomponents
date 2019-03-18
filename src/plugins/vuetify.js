import Vue from 'vue'
import Vuetify, {
  VApp,
  VTimePicker,
  VCheckbox
} from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VTimePicker,
    VApp,
    VCheckbox
  },
  iconfont: 'md',
  theme: {
    primary: '#349cb5',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
