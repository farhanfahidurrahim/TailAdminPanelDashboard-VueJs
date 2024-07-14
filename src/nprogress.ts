// src/nprogress.js
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: true,
  easing: 'ease',
  speed: 1000,
  minimum: 0.5,
  trickleSpeed: 200,
});

export default NProgress;