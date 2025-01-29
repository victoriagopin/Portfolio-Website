import { html, render } from '../lib.js';

const petLoversTemplate = () =>  html`
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

                <div class="right project">

                    <ul>
                        <li>PetLovers е Single Page Application (SPA), създадено използвайки REACT </li>
                        <li>Предоставя платформа за любителите на домашни любимци, където могат да споделят снимки и да си създадът профил</li>
                        <li>Гост потребител има достъп до:</li>
                        <ul class="inner-ul">
                            <li>Login и Register страница</li>
                            <li>Catalog страница</li>
                            <li>About страница</li>
                        </ul>
                        <li>Регистриран потребител има достъп и до:</li>
                       <ul class="inner-ul">
                            <li>Pet Details страница</li>
                            <li>Like функционалност</li>
                            <li>Създаване и управление на потребителски профил и на дом. любимец</li>
                            <li>Редактиране или изтриване на собствени публикации</li>
                            <li>Search страница</li>
                       </ul>
                       <a href="https://github.com/victoriagopin/Pet-Lovers-React-Project" target="_blank">Линк към проекта в GitHub</a>
                    </ul>
                </div>

                <div>
                 
                 <input type="radio" name="position"  class="first"/>
                 <input type="radio" name="position" />
                 <input type="radio" name="position" />
                 <input type="radio" name="position" checked />
                 <input type="radio" name="position" />
                 <input type="radio" name="position" />
                 <input type="radio" name="position" />
                 <main id="carousel">
                   <div class="item pl"></div>
                   <div class="item pl"></div>
                   <div class="item pl"></div>
                   <div class="item pl"></div>
                   <div class="item pl"></div>
                   <div class="item pl"></div>
                   <div class="item pl"></div>
                   </main>
             </div>
            </div>
        </div>`;

export function showPetLovers(){
    render(petLoversTemplate());
}