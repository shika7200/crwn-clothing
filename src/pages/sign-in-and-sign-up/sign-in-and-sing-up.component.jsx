import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sing-up/sign-up.component';

import './sign-in-and-sing-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
<SignIn/>
<SignUp/>
    </div>
);

export default SignInAndSignUpPage;
