import React, { useEffect,useState ,useCallback} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from './list.module.scss'
import Card from 'react-bootstrap/Card'
import { useHistory } from "react-router-dom";



const UserList =  () => { 
    const [list,setList] = useState([])

    
    let history = useHistory();



    useEffect(()=>{
        let userData = localStorage.getItem('UserList')
        let userList = JSON.parse(userData)
        setList(userList)
       
    },[])

    

    const setSearch = (e) => {
        console.log("111111111111" ,list)

        



        var searchString = e;
        var data = list.filter((account) => 
        
        { return account.user.username == searchString })
        
        let userData = localStorage.getItem('UserList')
        let userList = JSON.parse(userData)
        if(e == '' || null){
            setList(userList)
        }else{
            setList(data)
        }
    }


  const adduser = () => {
    history.push(`/addform`);


}

    return (

        <div className={style.listWrap}>
                        <div className="spacer50"></div>
                        <Row className="container-fluid">
                        <Col lg={2}></Col>
                        <Col lg={8}>


                        <Row className="pt-5 pb-5">
                            <Col lg={6}>
                                <input type="text" className="search" onChange={(e) => setSearch(e.target.value)} />
                            </Col>
                        
                            <Col lg={6} className="text-end">
                                <button className="btn2"  onClick={() => adduser()}>Add New</button>
                            </Col>
                        </Row>

                        {list.map((user)=>{
                    return (
                        
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
                       
                       
                       ) })}
                       
                        </Col>
                        <Col lg={2}></Col>
                        </Row>   
        </div>
        )
    }


export default UserList;
