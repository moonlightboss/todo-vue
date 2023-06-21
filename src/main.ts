import { createApp } from "vue";
import router from './routes/routes'
import "./style.css";
import App from "./App.vue";



createApp(App).use(router).mount("#app");