import Vue from 'vue';
import './plugins/flatpickr'
import wrap from '@vue/web-component-wrapper';
import VueTimePicker from './components/VueTimePicker';

const CustomTimePicker = wrap(Vue, VueTimePicker)
window.customElements.define('time-picker', CustomTimePicker);
