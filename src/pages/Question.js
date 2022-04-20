import React from "react";
import { Field, Form, Formik } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import { addQuestion } from "../actions/questionAction";
export const Questions = () => {
    const dispatch = useDispatch()
    const submitForm = (values) => {
        dispatch(addQuestion(values))
    }
    return (
        <div>
            <h1>Додати питання</h1>
            <Formik enableReinitialize initialValues={{description: '', id: null}}
            onSubmit={(values, actions) => {
                 submitForm(values)
             }}
            >
                <Form>
                    <label></label>
                    <Field name='description' className='input' />
                    <button type="submit" className="btn btn-submit">Додати питання</button>
                </Form>
            </Formik>
        </div>
    )
}