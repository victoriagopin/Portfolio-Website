import { page } from "./lib.js";
import { showAboutMe } from "./views/aboutMe.js";
import { showAdditionalInfo } from "./views/additionalInfo.js";
import { showExperience } from "./views/experience.js";

page('/', '/about');
page('/index.html', '/about');

page('/about', showAboutMe);
page('/experience', showExperience);
page('/additional-information', showAdditionalInfo);

page.start();