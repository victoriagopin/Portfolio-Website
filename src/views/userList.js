import { html, render } from '../lib.js';

const userListTemplate = () => html`
 <div class="container">
            <div class="square project ul">
                <div class="nav ul">
                    <ul>
                        <li><a href="/projects">Movie-Magic</a></li>
                        <li><a href="/pet-lovers">PetLovers</a></li>
                        <li><a href="/communicate-easy">Communicate-Easy</a></li>
                        <li><a href="/user-list">Users List</a></li>
                        <li><a href="/su-exercise">SoftUni Exercises</a></li>
                    </ul>
                </div>
                <div class="left project ul">
                    <img src="./images/userlist.png" alt="">
                </div>

                <div class="right project ul">

                    <ul>
                        <li>User List е уеб приложение, разработено с помощта на React, което функционира като система за управление на потребителски данни</li>
                        <li>Приложението предоставя на потребителите възможност да извършват следните действия:</li>
                        <ul class="inner-ul">
                            <li>Преглеждат информация за потребители</li>
                            <li>Въвеждат нови потребителски данни</li>
                            <li>Редактират съществуващи данни</li>
                            <li>Изтриват потребителски записи</li>
                        </ul>
                       <a href="https://github.com/victoriagopin/User-List-ReactJS" target="_blank" class="ul">Линк към проекта в GitHub</a>
                    </ul>
                </div>
            </div>
        </div>`;

export function showUserList(){
    render(userListTemplate());
}