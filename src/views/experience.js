import { html, render } from '../lib.js'

const experienceTemplate = () => html`
 <div class="container about">
            <div class="square">
                <div class="nav">
                    <ul>
                        <li><a href="/about">Лична информация</a></li>
                        <li><a href="/experience">Опит</a></li>
                        <li><a href="additional-info.html">Допълнителна информация</a></li>
                    </ul>
                </div>
            
                <div class="wrap">
                    <div class="row">
                    <h2>Февруари 2022 - Март 2023</h2>
                    <h3>Работодател: Тренд-Корнер ЕООД</h3>
                    <p>Длъжност: Продавач-консултант</p>
                    <ul>
                        <li>Консултиране на клиенти относно продуктите и услугите на компанията</li>
                        <li>Информиране на клиентите за актуални промоции, отстъпки и специални оферти</li>
                        <li>Обработване на рекламации, замени и връщания</li>
                        <li>Изпълнение на касови операции</li>
                    </ul>

                    </div>

                    <div class="row">
                    <h2>Април 2023 - Септември 2023</h2>
                    <h3>Работодател: Ивас Ауто ЕООД</h3>
                    <p>Длъжност: Офис сътрудник</p>
                    <ul>
                        <li>Изготвяне на покупко-продажбени договори за автомобили</li>
                        <li>Подготовка и комплектоване на всички необходими документи за регистрация на автомобили</li>
                        <li>Извършване на консултации и изготвяне на граждански застраховки</li>
                        <li>Съдействие на клиентите по време на целия процес на покупка и регистрация</li>
                    </ul>

                    </div>
                </div>
            </div>
        </div>`;

export function showExperience(ctx){
    render(experienceTemplate());
}