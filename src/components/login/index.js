

import React, { useEffect,useState ,useCallback} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from './login.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "../../redux/actions";
import { getUserList } from '../../redux/actions';
import data from "../../datas/login.json";
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    password: Yup.string()
  .min(3, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  username: Yup.string()
  .required('Required'),
});


const Login =  ({getUserList, userData}) => { 
    const [list,setList] = useState([])

    const { loginData, isLoading } = useSelector((state) => state);
    const dispatch = useDispatch();
    let history = useHistory();

    const fetchcallback = useCallback(()=>{
        getUserList(data)
    },[getUserList])
  
    useEffect(() => {
      dispatch(requestUsers(data));
    }, []);

    useEffect(()=>{
        fetchcallback()
    },[fetchcallback])

    useEffect(()=>{
        setList(userData)
    },[userData])



  const onSubmit = values => {
    let formData = {
      username: values.username,
      password: values.password,
    }

    if(loginData[0].username == formData.username && loginData[0].password == formData.password ){
        toast.success("Login Successs")
        localStorage.setItem('UserList', JSON.stringify(list.results))
        history.push(`/userlist`);

    }else{
        toast.error("Invalid username or password");
    }


}

    return (
        <div className={style.loginWrap}>
        <Row>
        <Col className="col-lg-12 text-center">
        <h3 className="title">Create Your Fan Account</h3>

            <Formik
                initialValues={{
                
                    username: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
            >
            {({ errors, touched }) => (
                <Form >
                    <Row>
                    <Col lg={12}>
                    <Field name="username" type="text" className="inputs" placeholder="Enter username" />
                    {errors.username && touched.username ? <div className="errMsg">{errors.username}</div> : null}
                    </Col>
                    <div className="spacer20"></div>
                    <Col lg={12}>
                    <Field name="password" type="password" className="inputs" placeholder="Enter password"  />
                    {errors.password && touched.password ? <div className="errMsg">{errors.password}</div> : null}
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
            </Row>
        </div>
       );
}


const mapStateToProps = (state) => {
    return { userData: state.userData }
    }
    export default connect(mapStateToProps,{getUserList})(Login);

