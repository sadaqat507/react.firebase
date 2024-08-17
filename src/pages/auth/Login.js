import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendEmailVerification } from 'firebase/auth'
import { auth } from 'config/firebase'

const { Title } = Typography

const initialState = { fullName: "", email: "", password: "", confirmPassword: "" }

export default function Login() {
    const [state, setState] = useState(initialState)
    const [user, setUser] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe(); // Cleanup the subscription on unmount
    }, []);

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault();

        let { fullName, email, password, confirmPassword } = state

        fullName = fullName.trim()

        if (fullName.length < 3) { return window.toastify("Please enter your full name", "error") }
        if (!window.isEmail(email)) { return window.toastify("Please enter a valid email address", "error") }
        if (password.length < 6) { return window.toastify("Password must be at least 6 chars.", "error") }
        if (confirmPassword !== password) { return window.toastify("Passwords don't match", "error") }

        setIsProcessing(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user", user)
                window.toastify("You have successfully logged in", "success")
            })
            .catch((error) => {
                console.error("error", error)
                switch (error.code) {
                    case "auth/email-already-in-use":
                        window.toastify("Email address already in use", "error"); break;
                    default: window.toastify("Something went wrong while logging in", "error"); break;
                }
            })
            .finally(() => {
                setIsProcessing(false)
            })
    }

    const handleLogout = () => {
        console.log("Function is running now.");
        signOut(auth)
            .then(() => {
                console.log("You are logged out");
                setUser(null); // Reset user state after logout
            })
            .catch((error) => {
                alert("Something went wrong.");
                console.error(error); // Optional: Log the error for debugging
            });
    };


    console.log( user)
     const showAuthUser=()=>{
        const user= auth.currentUser

        updateProfile(user, {
            displayName:"sadaqat Ali",
            photoURL:"https://yt3.ggpht.com/Qr2G7a3vLZGuqeWTe5BjxNPBYYwTi3T7gKkSeG-Ug4fk9sPHEZeyJ6uobmSTn-tpd0t0SlMeXw=s88-c-k-c0x00ffffff-no-rj"
           }).then(() => {
            console.log("Profile updated!")
             // ...
          }).catch((error) => {
            console.log("An error occurred")
            console.log(error)
            // ...
          });

    }
    const updateUserProfile = () => {
        const user = auth.currentUser;
    
        if (user) {
            console.log("Function is clicked now.");
    
            // First, send a verification email to the new address
            sendEmailVerification   (user)
                .then(() => {
                    console.log("Verification email sent. Please verify before updating the email.");
                    alert("A verification email has been sent to your new email address. Please verify it before updating your email.");
                    

                    // Optionally, you can guide the user to verify their email
                })
                .catch((error) => {
                    console.error("An error occurred while sending the verification email:", error);
                    alert(`Failed to send verification email: ${error.message}`);
                });
        } else {
            console.log("No user is currently signed in.");
        }
    };

     
    
    return (
        <main className='auth'>
            <div className="card p-3 p-md-4 w-100">
                {user ?
                    <div className='text-center'>
                        <p>{user.email}</p>
                        <p>{user.uid}</p>
                        <p>User Display Name = {user.displayName}</p>
                        <button className='btn btn-outline-danger text-center' type='button' onClick={handleLogout}>Logout</button>
                        <button className='btn btn-outline-info text-center' type='button' onClick={showAuthUser}>User Show</button>
                        <button className='btn btn-outline-success text-center' type='button' onClick={updateUserProfile}>Update User Profile</button>
                         <img src={user.photoURL} alt= {` ${user.email} photo URL`} />
                    </div> :
                    <Form layout="vertical" onSubmitCapture={handleSubmit}>
                        <Title level={2} className='text-center'>Login</Title>
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Input size='large' type='text' placeholder='Enter your full name' name="fullName" value={state.fullName} onChange={handleChange} />
                            </Col>
                            <Col span={24}>
                                <Input size='large' type='email' placeholder='Enter your email' name="email" value={state.email} onChange={handleChange} />
                            </Col>
                            <Col span={24}>
                                <Input.Password size='large' placeholder='Enter your password' name="password" value={state.password} onChange={handleChange} />
                            </Col>
                            <Col span={24}>
                                <Input.Password size='large' placeholder='Confirm your password' name="confirmPassword" value={state.confirmPassword} onChange={handleChange} />
                            </Col>
                            <Col span={24}>
                                <Button type='primary' size='large' block loading={isProcessing} onClick={handleSubmit}>Login</Button>
                            </Col>
                        </Row>
                    </Form>
                }
            </div>
        </main>
    )
}
