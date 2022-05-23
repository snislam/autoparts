import React from 'react';

const SocialLogin = ({ signInWithGoogle }) => {
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-active btn-accent w-full">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;