import { html, render } from '../lib.js'

const aboutMeTemplate = () => html`
    <div class="container">
    <div class="square">
        <div class="nav">
            <ul>
                <li><a href="/about">Лична информация</a></li>
                <li><a href="/experience">Опит</a></li>
                <li><a href="/additional-information">Допълнителна информация</a></li>
            </ul>
        </div>
        <div class="left">
            <img src="./images/me.jpg" alt="">
        </div>

        <div class="right">

            <ul>
                <li><i class="fas fa-user about"></i>Име: Виктория Гопин</li>
                <li><i class="fa fa-calendar about"></i>Дата на раждане: 15.08.2002</li>
                <li><i class="fas fa-map-marker-alt location"></i></i>Място на раждане: София, България</li>
                <li><i class="fa fa-map-pin about"></i>Адрес: ж.к. Лев Толстой, София</li>
                <li><i class="fa fa-phone about"></i>Телефонен номер: 0886181907</li>
                <li><i class="fas fa-envelope mail"></i>Email: victoria_gopin@abv.bg</li>
            </ul>
        </div>
    </div>
</div>`;

export async function showAboutMe(ctx) {
    render(aboutMeTemplate());
}
