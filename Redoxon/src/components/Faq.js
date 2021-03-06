import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'react-image-webp';
import { Container, Row, Col } from 'react-bootstrap';
import App from './../App.css';


class Faq extends React.Component {
    render() {
        return <Container fluid>
            <Header />
            <Row>
                <Col>
                    <Image webp={require("../images/faq.webp")} style={{ width: '100%' }} />
                </Col>
            </Row>
            
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="py-4">
                    <h1 className="py-4">Често задавани въпроси за Редоксон®</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 2 }}>
                    <Image webp={require("../images/flower.webp")} style={{ width: '100%' }} />
                </Col>
                <Col md={{ span: 4 }}>
                    <h1>Безопасно ли е да се приема Редоксон® всеки ден?</h1>
                    <p>Да, ако се приема според указанията.</p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 2 }}>
                    <h1 className="py-4">Редоксон® подходящ ли е за диабетици?</h1>
                    <p>Редоксон® Двойно действие ефервесцентни таблетки съдържа подсладители и захар, въпреки че захарта е в много малко количество (захароза – 0,13% от таблетката). Ефервесцентните таблетки съдържат 274,45 mg манитол, 20 mg ацесулфам, 25 mg аспартам (източник на фенилаланин), 6 mg захароза.
                     Ние нямаме специфични препоръки за пациентите с диабет
                     и Ви предлагаме да говорите с медицински специалист, за да получите допълнителен съвет
                 дали този продукт е подходящ за Вас.</p>
                </Col>
                <Col md={{ span: 4 }}>
                    <h1 className="py-4">Какво означава NRV?</h1>
                    <p>NRV (Nutritional Reference Value) означава хранителна референтна стойност. Това е дневното количество на даден витамин или минерал,
                      от което се нуждае средно статистическия здрав човек,
                       за да поддържа своето здраве. % NRV в хранителната добавка Ви
                   казва колко от NRV на витамина или минерала получавате от всяка доза хранителна добавка.</p>
                </Col>
            </Row>
            <Row>

                <Col md={{ span: 4, offset: 2 }}>
                    <h1>Безопасно ли е да се приема Редоксон® по време на бременност или кърмене?</h1>
                    <p>Не са ни известни някакви проблеми при прием на Редоксон®
                         по време на бременност, но Вие трябва винаги да говорите
                          с Вашия лекар преди да приемете витамини и хранителни добавки,
                   съдържащи минерали по време на бременност.</p>
                    <p>По принцип Редоксон® Двойно действие се счита за безопасен по време на бременност и кърмене, когато се използва според указанията. Тъй като обаче няма достатъчно контролирани проучвания при хора, оценяващи риска от продукта по време на бременност или кърмене, той трябва да се прилага при бременност или кърмене, само когато лекарят смята, че това е важно. Препоръчителната доза не трябва да се надхвърля, тъй като хроничното предозиране може да бъде вредно за плода и новороденото.</p>
                    <p>Витамин C и цинк се секретират в кърмата. Това трябва да се има предвид.</p>
                </Col>
                <Col md={{ span: 4 }}>
                    <Image webp={require("../images/blood-cells.webp")} style={{ width: '100%', height: '100%' }} />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 2 }}>
                    <Image webp={require("../images/orange-juice@2x.jpg")} style={{ width: '100%' }} />
                </Col>
                <Col md={{ span: 4 }}>
                    <h1 className="py-4">Безопасен ли е Редоксон® за деца?</h1>
                    <p>Редоксон® Двойно действие е предназначен за възрастни и деца над 12 години. Той не е предназначен за употреба при деца под 12 години.</p>
                    <p>Редокситос® желирани бонбони може да се дава на деца на 4 и повече години.</p>
                    <h1>Съдържа ли Редоксон® лактоза, пшеница или дрожди?</h1>
                    <p>Не, Редоксон® не съдържа лактоза, пшеница или дрожди.</p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 2 }}>
                    <h1>Какво е съдържанието на натрий в Редоксон®?</h1>
                    <p>Нашите ефервесцентни таблетки Редоксон® Двойно действие
                 (витамин C + цинк хранителна добавка) съдържат 312,1 mg/таблетка.</p>

                    <h1>Подходящ ли е Редоксон® за вегетарианци?</h1>
                    <p>Редоксон® Двойно действие е подходящ за вегетарианци.</p>
                </Col>
                <Col md={{ span: 4 }}>
                    <Image webp={require("../images/vegatables@2x.webp")} style={{ width: '100%' }} />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 2 }}>
                    <Image webp={require("../images/green-particle@2x.jpg")} style={{ width: '100%', height: '100%' }} />
                </Col>
                <Col md={{ span: 4 }}>
                    <h1 className="py-4">Къде мога да намеря нещо повече за витамините и минералите?</h1>
                    <p>Следните уебстраници предоставят полезна информация за витамините и минералите:</p>
                    <p><a href="http://www.hsis.org" target="_blank" rel='noreferrer noopener'>www.hsis.org</a></p>

                    <ul><li>HSIS, Health Supplements Information Service/ Информационна служба за здравословни хранителни добавки, е обучителна програма, която представя факти относно хранителните добавки по прост, разбираем начин с полезна информация за витамините и минералите.</li></ul>
                    <p><a href="http://www.nhs.uk/conditions/vitamins-minerals/Pages/vitamins-minerals.aspx" target="_blank" rel='noreferrer noopener'>http://www.nhs.uk/conditions/vitamins-minerals/Pages/vitamins-minerals.aspx</a></p>
                    <ul><li>Уебстраницата Live Well The NHS Choice предоставя указания относно витамините и минералите.</li></ul>
                    <p><a href="http://lpi.oregonstate.edu" target="_blank" rel='noreferrer noopener'>http://lpi.oregonstate.edu/ </a></p>
                    <ul><li>Институтът 'Linus Pauling'</li></ul>

                </Col>
            </Row>
            
           

        
                        <Footer />
        </Container>;
                }
            }
            
            
export default Faq;