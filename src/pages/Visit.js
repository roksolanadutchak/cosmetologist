import React from "react";
import {Switch, useParams, useRouteMatch} from "react-router";
import { Field, Form, Formik, FormikProps } from 'formik';
export const Visit = () => {
    const { id }= useParams();
    <Formik initialValues={{additional_information: '', finishTime: '', id_client: 0, procedure: '', reccomended_cosmetics: '', startTime: '', state_after_procedure: ''}}>
        <Form>
            <Field name="additional_information" placeholder="Замітки про візит"/>
            <Field name="procedure" placeholder="Процедура"/>
            <Field name="reccomended_cosmetics" placeholder="Рекомендована косметика"/>
            <Field name="startTime" placeholder="Початок процедури"/>
            <Field name="finishTime" placeholder="Кінець процедури"/>
            <Field name="state_after_procedure" placeholder="Стан після процедури"/>
        </Form>
    </Formik>
}