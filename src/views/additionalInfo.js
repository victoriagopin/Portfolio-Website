import { html, render } from '../lib.js';

const additionalInfoTemplate = () => html`
<div class="container about">
            <div class="square">
                <div class="nav">
                    <ul>
                        <li><a href="/about">Лична информация</a></li>
                        <li><a href="/experience">Опит</a></li>
                        <li><a href="/additional-information">Допълнителна информация</a></li>
                    </ul>
                </div>
            
                <h2 class="studies">Образование:</h2>
                    <div class="column">
                       
                        <div class="add-info first">
                            <h3>Средно образование:</h3>
                            <p class="heading">54 СУ "Св. Иван Рилски"</p>
                            <p class="date">06/2021 - София, България </p>
                        </div>

                        <div class="add-info">
                            <h3>SoftAcademy Курсове</h3>
                            <p class="heading">Завършен курс: Web Programming -<br/> HTML, CSS and JS</p>
                            <p class="date">09/01/2023 - София, България</p>
                            <a href="">Certificate</a>
                            <p class="heading">Завършен курс: Web Development - Mentoring Program</p>
                            <p class="date">27/02/2023 - София, България</p>
                            <a href="">Certificate</a>
                        </div>

                        <div class="add-info">
                            <h3>Software University - SoftUni</h3>
                            <p class="heading">Изкарани курсове от JavaScript пътеката:</p>
                            <ul>
                                <li>Programming Basics</li>
                                <li>Fundamentals Module</li>
                                <li>JS Advanced</li>
                                <li>JS Web</li>
                                <li>JS Front-End</li>
                            </ul>
                        </div>
                    
                    </div>

                    <div class="fixed">
                        <h2 class="studies">Езици:</h2>
                        <ul>
                            <li>български</li>
                            <li>английски (B2 - IELTS<br/>  Certificate)</li>
                            <li>испански (A1)</li>
                        </ul>
                    </div>
                    
               </div>
            </div>`;

export function showAdditionalInfo(){
    render(additionalInfoTemplate());
}