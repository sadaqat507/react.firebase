  import React, { useState } from 'react';
  import { Col, Input, Row, Typography, Button, Form } from 'antd';
  // import { doc, setDoc } from "firebase/firestore"; 

  import { firestore } from 'config/firebase';
  import {  doc, setDoc } from 'firebase/firestore/lite';
  import { FirebaseError } from 'firebase/app';

  const { Title } = Typography;

  export default function Firebasedata() {
    const randomId = Math.random().toString(36).slice(2);
    console.log(randomId+randomId)

    const [state, setState] = useState({ nickname: '', qualification: '', description: '', biodata: '', detailId:randomId+randomId });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setState({
        ...state,
        [name]: value,
      });
    };

    // const handleSubmit = async () => {
    // const {nickname, qualification, description,biodata}=state

    
    //   try {
    //     const docRef = await addDoc(collection(firestore, 'users'), {nickname, qualification, description,biodata});
    //     console.log('Document written with ID: ', docRef.id);
    //   } catch (e) {
    //     console.error('Error:', e);   
      
    //     if (e instanceof FirebaseError) {
    //       console.error('Firebase Error:', e.message || e);  
    //     } else if (e.message && e.message.includes('network')) {
    //       console.error('Network Error:', e.message);
    //     } else {
    //       console.error('Unexpected Error:', e.message || e);
    //     }
    //   }
    // };

    const handleSubmit = async () => {
      const  userId = Math.random().toString(36).slice(2);
       const { nickname, qualification, description, biodata, detailId } = state;
      
      try {
       await setDoc(doc(firestore, 'users',  userId), { 
          nickname, 
          qualification, 
          description, 
          biodata, 
           userId ,
           detailId
        });
        console.log('Document written with ID: ',  userId);
      } catch (e) {
        console.error('Error:', e);   
        
        if (e instanceof FirebaseError) {
          console.error('Firebase Error:', e.message || e);  
        } else if (e.message && e.message.includes('network')) {
          console.error('Network Error:', e.message);
        } else {
          console.error('Unexpected Error:', e.message || e);
        }
      }
    };
    

  // let randomId=Math.random().toString(36).slice(2);
  //   const handleSubmit=async()=>{

  //  let {nickname, qualification, description,biodata}=state

  // await setDoc(doc(firestore, "users", randomId), {nickname, qualification, description,biodata});
  //     console.log("Document ID of this user",randomId)

  //   }
    
    return (
      <main>
        <h1 className="text-center">Extra Information</h1>
        <div className="card p-3 p-md-4 w-100 text-center">
          <Title level={2} className="text-center">Set Profile</Title>

            <Form layout="vertical" onFinish={handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item>
              <Input
                size="large"
                type="text"
                placeholder="Enter your Nickname"
                name="nickname"
                value={state.nickname}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Input
                size="large"
                type="text"
                placeholder="Enter your Qualification"
                name="qualification"
                value={state.qualification}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Input
                type='text'
                size="large"
                placeholder="Enter your Description"
                name="description"
                value={state.description}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Input
                size="large"
                placeholder="Confirm your Biodata"
                name="biodata"
                value={state.biodata}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button type="primary" size="large" block htmlType="submit">
              Register
            </Button>
          </Col>
        </Row>
      </Form>
        </div>
      </main>
    );
  }
