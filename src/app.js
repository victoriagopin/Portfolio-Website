import { page } from "./lib.js";
import { showAboutMe } from "./views/aboutMe.js";

page('/about', showAboutMe);

page.start();