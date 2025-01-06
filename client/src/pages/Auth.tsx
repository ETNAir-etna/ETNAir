import { useState } from 'react';
import { SignIn, SignUp } from '../components/Auth';


const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div>
            <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
            {isSignUp ? <SignUp /> : <SignIn />}
            <button onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
        </div>
    );
};

export default Auth;
