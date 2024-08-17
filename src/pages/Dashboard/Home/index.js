// import React, { useState } from 'react'
// import { Col, Input, Row, Typography } from 'antd'
// import { Firestore } from 'firebase/firestore/lite'
// import { Form } from 'react-router-dom'
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle'
//  const { Title } = Typography

// export default function Home() {
//     const initialState = {  nickname: "", qualification: "", description: "",  biodsata: "" }

//     const [state, setState] = useState(initialState )


//     return (
//         <main>
//             <h1>Home</h1>
//             <div className="card p-3 p-md-4 w-100">
//                 <Title level={2} className='text-center'>Set Profile</Title>

//                 <Form layout="vertical" >
//                     <Row gutter={[16, 16]}>
//                         <Col span={24}>
//                             <Input size='large' type='text' placeholder='Enter your Nick Name' name=" nickname" value={state. nickname}  />
//                         </Col>
//                         <Col span={24}>
//                             <Input size='large' type='qualification' placeholder='Enter your qualification' name="qualification" value={state.qualification}  />
//                         </Col>
//                         <Col span={24}>
//                             <Input   size='large' placeholder='Enter your Description' name="description" value={state.description} />
//                         </Col>
//                         <Col span={24}>
//                             <Input size='large' placeholder='Confirm your biodata' name="biodata" value={state.biodata}  />
//                         </Col>
//                         <Col span={24}>
//                             <Button type='primary' size='large' block >Register</Button>
//                         </Col>
//                     </Row>
//                 </Form>
//             </div>

//         </main>
//     )
// }
