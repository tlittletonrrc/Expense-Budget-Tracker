import { SignInButton, SignUpButton } from "@clerk/clerk-react"
import "./SignedOutPage.css"

function SignedOutPage() {
    return(
        <>
            <div className="signed-out-form">
                <h3 className="signed-out-header">Sign In / Sign Up</h3>
                <p className="sign-in-message">Looks like your not signed in.</p>
                <SignInButton/>
                <p className="sign-up-message">Don't have an account?</p>
                <SignUpButton/>
            </div>
        </>
    )
}

export default SignedOutPage
