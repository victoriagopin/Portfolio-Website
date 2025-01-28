import { html, render } from '../lib.js';

const projectsTemplate = () => html `
 <div class="container">
            <div class="square project">
                <div class="nav">
                    <ul>
                        <li><a href="/projects">Movie-Magic</a></li>
                        <li><a href="/pet-lovers">PetLovers</a></li>
                        <li><a href="/communicate-easy">Communicate-Easy</a></li>
                        <li><a href="/user-list">Users List</a></li>
                        <li><a href="/su-exercise">SoftUni Exercises</a></li>
                    </ul>
                </div>
                <div class="left project">
                    <img src="/images/moviemagic.png" alt="">
                </div>

                <div class="right project">

                    <ul>
                        <li>Movie Magic е приложение, създадено с помощта на Express Handlebars, предназначено за филмови ентусиасти </li>
                        <li>Предоставя на потребителите възможност да разглеждат наличните филми и техните описания</li>
                        <li>Гост потребителите могат:</li>
                        <ul class="inner-ul">
                            <li>Да разглеждат списъка с качени филми</li>
                            <li>Да преглеждат описанията на филмите</li>
                            <li>Да имат достъп до страницата за търсене, където могат да открият конкретен филм</li>
                        </ul>
                        <li>Регистрираните потребители разполагат с разширена функционалност, която им позволява:</li>
                       <ul class="inner-ul">
                            <li>Да създават нови филми в платформата</li>
                            <li>Да добавят актьорски състав към създадените филми</li>
                       </ul>
                       <a href="https://github.com/victoriagopin/Movie-Magic" target="_blank">Линк към проекта в GitHub</a>
                    </ul>
                </div>
            </div>
        </div>`;

export function showProjects(){
    render(projectsTemplate());
}