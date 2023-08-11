import RootLayout from '@/Layouts/RootLayout';
import React from 'react';

const Login = () => {
    return (
        <div>
            Login page
        </div>
    );
};

export default Login;
Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};