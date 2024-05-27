// Form.js
import { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
function Form({ setDatalogin }) {
const[isLogin,setIsLogin]=useState(false);
const [showLogin, setShowLogin] = useState(true);
setDatalogin(isLogin);
    return (
        <div className="loginmain">
        {showLogin ? <Login setIsLogin={setIsLogin} setShowLogin={setShowLogin} />: <Registration setShowLogin={setShowLogin} />}
        </div>
    );
}

export default Form;
