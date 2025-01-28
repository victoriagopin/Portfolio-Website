import { page } from "./lib.js";
import { showAboutMe } from "./views/aboutMe.js";
import { showAdditionalInfo } from "./views/additionalInfo.js";
import { showCommunicateEasy } from "./views/communicateEasy.js";
import { showExperience } from "./views/experience.js";
import { showPetLovers } from "./views/petLovers.js";
import { showProjects } from "./views/projects.js";
import { showSuTemplate } from "./views/su.js";
import { showUserList } from "./views/userList.js";

page('/', '/about');
// page('/index.html', '/about');

page('/about', showAboutMe);
page('/experience', showExperience);
page('/additional-information', showAdditionalInfo);

page('/projects', showProjects);
page('/pet-lovers', showPetLovers);
page('/communicate-easy', showCommunicateEasy);
page('/user-list', showUserList);
page('/su-exercise', showSuTemplate);

page.start();