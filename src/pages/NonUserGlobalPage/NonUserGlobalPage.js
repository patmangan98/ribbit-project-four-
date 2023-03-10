import {Link} from "react-router-dom"


export default function NonUserGlobalPage() {
    return (
    <>
        <Link to="/auth">
        <button>Sign-Up or Sign-in</button>
        </Link>

        <h1>You Should Probably Sign-Up</h1>
    </>
    )
}