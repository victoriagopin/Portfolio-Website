import { page } from "./lib.js";
import { showAboutMe } from "./views/aboutMe.js";
import { showExperience } from "./views/experience.js";

page('/about', showAboutMe);
page('/experience', showExperience);

page.start();