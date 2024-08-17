import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export default function Home() {
    return (
        <main>
            <h1>Auth Pages</h1>
            <Title level={1}>Home</Title>
            <Link to="/auth/register">Register</Link>
            <br />
            <Link to="/auth/login">Login</Link>
            <br />
            <Link to="/auth/firebase">Firebase</Link>
            <br />
            <Link to="/auth/readproduct">ReadProduct</Link>

        </main>
    );
}
