import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from './form.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    username: Yup.string()
    .required('Required'),
    first: Yup.string()
    .required('Required'),
    last: Yup.string()
    .required('Required'),
    gender: Yup.string()
    .required('Required'),
    title: Yup.string()
    .required('Required'),
    email:Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string()
    .required('Required'),
    dob: Yup.string()
    .required('Required'),
    
});


const UserForm =  () => { 
    let history = useHistory();
    const onSubmit = values => {
        let formData = {
        username: values.username,
        password: values.password,
        first: values.first,
        last: values.last, 
        gender: values.gender, 
        phone: values.phone,
        dob: values.dob,
        phone: values.phone,
        email: values.username,
        }
        localStorage.setItem('NewUserList', JSON.stringify(formData))
        toast.success("User added successfully")
    }

    return (
        <div className={style.formWrap}>
        <Row>
        <Col lg={3}></Col>
        <Col lg={6} className="text-center">
        <h3 className="title">Add User Form</h3>

            <Formik
                initialValues={{
                    username: '',
                    gender:'',
                    first:'',
                    last:'',
                    title:'',
                    email:'',
                    dob:'',
                    phone:'',
                    password: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
            >
            {({ errors, touched }) => (
                <Form >
                    <Row>
                    <Col lg={12}>
                    <Field name="first" type="text" className="inputs" placeholder="Enter firstname"  />
                    {errors.first && touched.first? <div className="errMsg">{errors.first}</div> : null}
                    </Col>
                   
                    <div className="spacer20"></div>
                    <Col lg={12}>
                    <Field name="last" type="text" className="inputs" placeholder="Enter lastname"  />
                    {errors.last && touched.last? <div className="errMsg">{errors.last}</div> : null}
                    </Col>


                    <div className="spacer20"></div>
                    <Col lg={12}>
                   <Field as="select" name="title"  className="inputs"  placeholder="Please select" >
                        <option value="red" name="title">Mr</option>
                        <option value="green" name="title">Miss</option>
                        <option value="blue" name="title">Ms</option>
                    </Field>
                    {errors.title && touched.title? <div className="errMsg">{errors.title}</div> : null}

                                
                    </Col>

                    <div className="spacer20"></div>
                    <Col lg={12}>
                    <div role="group" aria-labelledby="my-radio-group">
                        <label className="label1">Gender</label>
                            <label className="label1">
                            <Field type="radio" name="gender" value="Male" />
                            Male
                            </label>
                            <label className="label1">
                            <Field type="radio" name="gender" value="Female" />
                            Female
                            </label>
                            {errors.gender && touched.gender ? <div className="errMsg">{errors.gender}</div> : null}
                        </div>
                    </Col>

                    <div className="spacer20"></div>
                    <Col lg={12}>
                    <Field name="email" type="email" className="inputs" placeholder="Enter email"  />
                    {errors.email && touched.email ? <div className="errMsg">{errors.email}</div> : null}
                    </Col>

                    <div className="spacer20"></div>
                    <Col lg={12}>
                    <Field name="username" type="text" className="inputs" placeholder="Enter username"  />
                    {errors.username && touched.username ? <div className="errMsg">{errors.username}</div> : null}
                    </Col>

                    <div className="spacer20"></div>
                    <Col lg={12}>
                    <Field name="password" type="password" className="inputs" placeholder="Enter password"  />
                    {errors.password && touched.password ? <div className="errMsg">{errors.password}</div> : null}
                    </Col>

                    <div className="spacer20"></div>
                    <Col lg={12}>
                    <Field name="dob" type="date" className="inputs" placeholder="Enter DOB"  />
                    {errors.dob && touched.dob ? <div className="errMsg">{errors.dob}</div> : null}
                    </Col>

                    <div className="spacer20"></div>
                    <Col lg={12}>
                    <Field name="phone" type="tel" className="inputs" placeholder="Enter phone"  />
                    {errors.phone && touched.phone ? <div className="errMsg">{errors.phone}</div> : null}
                    </Col>
                    
                    <Col lg={12}>
                    <button type="submit" className="btn1" >Submit</button>
                    <ToastContainer />
                    </Col>
                    </Row>
                    </Form>
                    )}
            </Formik>
            </Col>
        <Col lg={3}></Col>
        </Row>
        </div>
       );
}


export default UserForm;

