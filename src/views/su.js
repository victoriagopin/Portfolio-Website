import { html, render } from '../lib.js';

const suTemplate = () => html`
 <div class="container">
            <div class="square project su">
                <div class="nav su">
                    <ul>
                        <li><a href="/projects">Movie-Magic</a></li>
                        <li><a href="/pet-lovers">PetLovers</a></li>
                        <li><a href="/communicate-easy">Communicate-Easy</a></li>
                        <li><a href="/user-list">Users List</a></li>
                        <li><a href="/su-exercise">SoftUni Exercises</a></li>
                    </ul>
                </div>
                <div class="left project su">
                    <img src="./images/su.png" alt="">
                </div>

                <div class="right project su">

                    <ul>
                        <li>SoftUni-Software-Engineering е репозитори, в което са качени част от домашните задания и изпити, извършени по време на обучението ми в СофтУни</li>
                        <li>В него са включени различни проекти и задачи, които обхващат основни и напреднали теми по JavaScript</li>
                        <li>Обобщение на основните умения и знания, които са придобити по време на обучението:</li>
                        <ul class="inner-ul su">
                            <li>Работа с основните функционалности на JS</li>
                            <li>Работа с линейни данни структури</li>
                            <li>Основни умения за работа с HTML и CSS</li>
                            <li>Работа с класове и обекти</li>
                            <li>Работа с функции и JSON формати</li>
                            <li>Извличане на информация и манипулиране на DOM дърво</li>
                            <li>Разбиране на концепцията за HTTP и създаване на заявки</li>
                            <li>Работа с не-релационни бази данн</li>
                            <li>Работа с REST API и асинхронно програмиране</li>
                       </ul>
                       <a href="" class="su">Линк към проекта в GitHub</a>
                    </ul>
                </div>
            </div>
        </div>`;

export function showSuTemplate(){
    render(suTemplate());
}