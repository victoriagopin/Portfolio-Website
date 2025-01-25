import { html, render } from '../lib.js';

const communicateEasyTemplate = () => html`
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
                <div class="left project cm">
                    <img src="./images/communicateeasy.png" alt="">
                </div>

                <div class="right project">

                    <ul>
                        <li>Communicate Easy е приложение, разработено с ReactJS </li>
                        <li>Уеб-приложението използва MongoDB като база данни за съхранение и управление на данни</li>
                        <li>Предоставя на потребителите възможност да взаимодействат чрез съобщения</li>
                        <li>Уеб-риложението включва функции като създаване на профил, което позволява на потребителите да персонализират своето изживяване</li>
                        <li>С бутона Communicate Now потребителите могат лесно да се свързват с други и да започват разговори без усилие</li>
                       <li>Функцията My Chats предлага удобен начин за преглед и управление на всички текущи разговори</li>
                       <a href="https://github.com/victoriagopin/Communicate-Easy" target="_blank">Линк към проекта в GitHub</a>
                    </ul>
                </div>
            </div>
        </div>`;

export function showCommunicateEasy(){
    render(communicateEasyTemplate());
}