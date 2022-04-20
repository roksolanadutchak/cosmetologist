import React, { useEffect } from "react";
import { Field, Form, Formik } from 'formik';
import { getAllQuestions } from "../actions/questionAction";
import { useDispatch, useSelector } from "react-redux";
export const CreateClient = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions)
    useEffect(()=> {
        dispatch(getAllQuestions())
        console.log('work')
    }, [])
    console.log(questions)
    return (
        <div>
            <h1>Додати нового клієнта</h1>
            <Formik initialValues={{fullName: '', birthday: '', workplace: '', homeCare: '', chronicDiseases: '', healingWounds: '', allergicReactions: '', alcoholSmoking: '', whatUseBefore: '', 
            1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: ''}}>
                <Form>
                    <label>Прізвище та імя</label>
                    <Field name='fullName' className='input'/>
                    <br/>
                    <label>Дата народження</label>
                    <Field name='birthday' className='input' />
                    <br/>
                    <label>Місце роботи</label>
                    <Field name='workplace' className='input' />
                    <br/>
                    <label>Домашній догляд</label>
                    <Field name='homeCare' className='input' />
                    <br/>
                    <label>Хронічні хвороби</label>
                    <Field name='chronicDiseases' className='input' />
                    <br/>
                    <label>Заживання ран</label>
                    <Field name='healingWounds' className='input' />
                    <br/>
                    <label>Алергічні реакції</label>
                    <Field name='allergicReactions' className='input' />
                    <br/>
                    <label>Алкоголь / Куріння</label>
                    <Field name='alcoholSmoking' className='input' />
                    <br/>
                    <label>Чим користувалась до цього</label>
                    <Field name='whatUseBefore' className='input' />
                    <br/>
                    <label>Тип шкіри</label>
                    <Field as='select' name='1' className="form-select">
                        <option value='нормальна'>нормальна</option>
                        <option value='суха'>суха</option>
                        <option value='комбінована'>комбінована</option>
                        <option value='жирна саборея'>жирна саборея</option>
                    </Field>
                    <br/>
                    <label>Тип шкіри (чутливість)</label>
                    <Field as='select' name='2' className="form-select">
                        <option value='не чутлива'>не чутлива</option>
                        <option value='дещо чутлива в Т-зоні'>дещо чутлива в Т-зоні</option>
                        <option value='чутлива, судинна сітка, купероз'>чутлива, судинна сітка, купероз</option>
                        <option value='розація'>розація</option>
                    </Field>
                    <br/>
                    <label>Стан пор</label>
                    <Field as='select' name='3' className="form-select">
                        <option value='вузькі, непомітні'>вузькі, непомітні</option>
                        <option value='помітні в Т-зоні'>помітні в Т-зоні </option>
                        <option value='розширені в Т-зоні'>розширені в Т-зоні </option>
                        <option value='дифузно розширені'>дифузно розширені</option>
                    </Field>
                    <br/>
                    <label>Фототип за Фіцпатриком</label>
                    <Field as='select' name='4' className="form-select">
                        <option value='І тип (рожево-бежева)'>І тип (рожево-бежева)</option>
                        <option value='ІІ тип (бежева. веснянки)'>ІІ тип (бежева. веснянки) </option>
                        <option value='ІІІ тип (дещо смаглява'>ІІІ тип (дещо смаглява</option>
                        <option value='ІV тип (смуглі)'>ІV тип (смуглі)</option>
                        <option value='V-Vi типи (індуси, афро-американці'>V-Vi типи (індуси, афро-американці</option>
                    </Field>
                    <br/>
                    <label>Стан гіперпігментації</label>
                    <Field as='select' name='5' className="form-select">
                        <option value='відсутня дисхромія'>відсутня дисхромія</option>
                        <option value='локальна гіперпігментація слабо виражена'>локальна гіперпігментація слабо виражена</option>
                        <option value='веснянки'>веснянки</option>
                        <option value='виражена локальна гіперпігментація - мелазма'>виражена локальна гіперпігментація - мелазма</option>
                    </Field>
                    <br/>
                    <label>Камедони</label>
                    <Field as='select' name='6' className="form-select">
                        <option value='закриті камедони поодинокі - Н'>закриті камедони поодинокі - Н</option>
                        <option value='закриті камедони (лоб, нижня третина, щоки, скроні) '>закриті камедони (лоб, нижня третина, щоки, скроні) </option>
                        <option value='гіперсекція зони (лоб, щоки, скроні, нижня третина) '>гіперсекція зони (лоб, щоки, скроні, нижня третина) </option>
                        <option value='відкриті камедони'>відкриті камедони</option>
                    </Field>
                    <br/>
                    <label>Запальні елементи</label>
                    <Field as='select' name='7' className="form-select">
                        <option value='поодинокі дрібні пустули'>поодинокі дрібні пустули</option>
                        <option value='поодинокі червоні вугрі (інфільтрати)'>поодинокі червоні вугрі (інфільтрати)</option>
                        <option value='вугрі в зоні (лоб, щоки, скроні, нижня третина)'>вугрі в зоні (лоб, щоки, скроні, нижня третина) </option>
                        <option value='пустули, червоні вугрі інфільтрати дифузно'>пустули, червоні вугрі інфільтрати дифузно</option>
                    </Field>
                    <br/>
                    <label>Характер висипань</label>
                    <Field as='select' name='8' className="form-select">
                        <option value='дрібні токсико-алергічні'>дрібні токсико-алергічні</option>
                        <option value='болючі червоні вугрі - гормональні'>болючі червоні вугрі - гормональні</option>
                    </Field>
                    <br/>
                    <label>Постакне</label>
                    <Field as='select' name='9' className="form-select">
                        <option value='рубці локально (щоки, нижня третина, лоб, скроні'>рубці локально (щоки, нижня третина, лоб, скроні</option>
                        <option value='рубці дифузно'>рубці дифузно</option>
                        <option value='червоно синюшні сліди'>червоно синюшні сліди</option>
                        <option value='синюшні сліди + рубці'>синюшні сліди + рубці</option>
                        <option value='глибокі атрофічні рубці'>глибокі атрофічні рубці</option>
                    </Field>
                    <br/>
                    <label>Оволосіння</label>
                    <Field as='select' name='10' className="form-select">
                        <option value='нормальне (пушкове світле)'>нормальне (пушкове світле)</option>
                        <option value='незначно посилене - темне'>незначно посилене - темне</option>
                        <option value='посилене оволосіння - темне (ознаки гірсутизму)'>посилене оволосіння - темне (ознаки гірсутизму)</option>
                    </Field>
                    <br/>
                    <label>Стан зволоженості шкіри</label>
                    <Field as='select' name='11' className="form-select">
                        <option value='зволожена, сяюча'>зволожена, сяюча</option>
                        <option value='тускла'>тускла</option>
                        <option value='зневоднена'>зневоднена</option>
                        <option value='шелушіння'>шелушіння</option>
                    </Field>
                    <br/>
                    <label>Зморшки</label>
                    <Field as='select' name='12' className="form-select">
                        <option value='динамічно-поверхневі'>динамічно-поверхневі</option>
                        <option value='динамічні та поверхневі статичні'>динамічні та поверхневі статичні</option>
                        <option value='міжбрівя, носо-губна складка '>міжбрів'я, носо-губна складка </option>
                        <option value='глибокі статичні (заломи шкіри - лоб, міжбрівя, носо-губки, очі'>глибокі статичні (заломи шкіри - лоб, міжбрів'я, носо-губки, очі</option>
                    </Field>
                    <br/>
                    <label>Зона очей</label>
                    <Field as='select' name='13' className="form-select">
                        <option value='зволожена, сяюча'>зволожена, сяюча</option>
                        <option value='тускла, дрібні зморшки'>тускла, дрібні зморшки</option>
                        <option value='зневоднена, дрібні та середні зморшки'>зневоднена, дрібні та середні зморшки, атонія</option>
                        <option value='виражена атонія, нависання повіки '>виражена атонія, нависання повіки </option>
                    </Field>
                    <br/>
                    <label>Тургор та тонус шкіри</label>
                    <Field as='select' name='14' className="form-select">
                        <option value='пружна та еластична'>пружна та еластична</option>
                        <option value='тургор та тонус дещо знижені птоз 1 ст'>тургор та тонус дещо знижені птоз 1 ст</option>
                        <option value='знижений тургор та тонус, дряблість шкіри певних зон, птоз 1-2 ст.'>знижений тургор та тонус, дряблість шкіри певних зон, птоз 1-2 ст.</option>
                        <option value='сильно знижений тургор, атонія, дерматопороз, птоз 2 -3 ст.'>сильно знижений тургор, атонія, дерматопороз, птоз 2 -3 ст.</option>
                    </Field>
                    <br/>
                    <label>Тип старіння </label>
                    <Field as='select' name='15' className="form-select">
                        <option value='дрібнозморшкуватий'>дрібнозморшкуватий</option>
                        <option value='втомлений'>втомлений</option>
                        <option value='мускульний'>мускульний</option>
                        <option value='деформаційно-пастозний'>деформаційно-пастозний</option>
                    </Field>
                    <br/>
                    <button type="submit" className="btn btn-submit">Додати клієнта</button>
                </Form>
            </Formik>
            {/* <form>
                <label> П. І. Б.
                    <input type="text"/>
                </label>
                <br />
                <label>
                    Дата народження
                    <input />
                </label>
                <br />
                <label>
                    Телефон
                    <input />
                </label>
                <br />
                <label>
                    Скарги
                    <input />
                </label>
                <br />
                <label>
                    Перенесені захворювання
                    <textarea />
                </label>
                <br />
                
                <label>
                    Хронічні захворювання
                    <select multiple={true} value={['B', 'C']}>
                        <option>Ендокринні захворювання</option>
                        <option>Цукровий діабет</option>
                        <option>Епілепсія</option>
                        <option></option>
                    </select>
                </label>
                <br />
                <label>
                    Алергічні реакції
                    <input />
                </label>
                <br />
                <label>
                    Приймання медичних препаратів
                    <input />
                </label>
                <br />
                <label>
                    Як заживають порізи / рани
                    <input />
                </label>
                <br />
                <label>
                    Чи відівідуєте ви солярій?
                    <input />
                </label>
                <br />
                <label>
                    Чи використовуєте ви сонцезахисний крем?
                    <input />
                </label>
                <br />
                <label>
                    Форма старіння
                    <input />
                </label>
                <br />
                <label>
                    Тип шкіри
                    <input />
                </label>
                <br />
                <label>
                    Рекомендації
                    <input />
                </label>
                <label>
                    <input />
                </label>
                <br />
                <label>
                    <input />
                </label>
            </form> */}
        </div>
    )
}