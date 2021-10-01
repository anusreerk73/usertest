import React, { useEffect,useState ,useCallback} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from './list.module.scss'
import Card from 'react-bootstrap/Card'
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';



const UserList =  () => { 
    const [list,setList] = useState([])
    
    let history = useHistory();



    useEffect(()=>{

        var userData = localStorage.getItem('UserList')
        var userList = JSON.parse(userData)

        console.log("userDatauserData" , userList)
        setList(userList)
       
    },[])



  const onSubmit = values => {
   

}

    return (

        <div className={style.listWrap}>

            <Row className="">
                <Col lg={9}></Col>
                <Col lg={3}>
                    <button className="btn1">Add New</button>
                </Col>
            </Row>
        {list.map((user)=>{
                    return (
                        <div>
                        <div className="spacer50"></div>
                        <Row className="container-fluid">
                        <Col lg={2}></Col>
                        <Col lg={8}>
                        
                        <Card className={style.listcard}>
                        <Card.Body>
                            <Card.Title>
                            <Row>
                            <Col lg={2}>
                                <img src={user.user?.picture?.medium} />
                            </Col>
                            <Col lg={10}>
                                <div>
                                    <div>{user?.user.name?.title}  {user.user?.name?.first}  {user.user?.name?.last}</div>
                                    <div className="location">{user?.user.location?.street}  {user.user?.location?.city}  {user.user?.location?.state}, {user.user?.location?.zip}</div>

                                </div>
                            </Col>
                            </Row>
                            </Card.Title>
                        
                        <Row>
                            <Col>
                                <div>
                                    <div>Username: <span className="test">{user?.user.username}</span></div>
                                    <div>Email: <span className="test">{user?.user.email}</span></div>
                                    <div>Registerd No:<span className="test">{user?.user.registered}</span></div>
                                    <div>Phone:<span className="test">{user?.user.phone}</span></div>
                                    <div>Cell: <span className="test">{user?.user.cell}</span></div>
                                </div>
                            </Col>
                        </Row>
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col lg={2}></Col>
                        </Row>
                    </div>


                    ) })}
        </div>
        )
    }


export default UserList;
