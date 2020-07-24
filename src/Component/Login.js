import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "./../Axios/index";
import { useSelector, useDispatch } from "react-redux";
import * as actionAuthen from "./../Redux/Action/authentication";

function Login() {
    const dispatch = useDispatch();
    const history = useHistory()
    const [inforLogin, setInforLogin] = useState({email: "", password: ""})
    const onChangeUserName = (e) => {
        // dispatch( actionAuthen.actionSignIn( e.target.name, e.target.value ))
        setInforLogin({
            ...inforLogin,
             email: e.target.value
        })
    }
    const onChangePassword = (e) => {
        // dispatch( actionAuthen.actionSignIn( e.target.name, e.target.value ))
        setInforLogin({
            ...inforLogin,
            password: e.target.value
        })
    }
    const loginClick = () =>{
        axios.post("/api/users/login", {
            user:{
                email: inforLogin.email,
                password: inforLogin.password
            }
        })
        .then(res => {
            if(res.status === 200){
                const {id, username, email, token } = res.data.user
                dispatch(actionAuthen.actionSaveValuesAuthen(id, username, email, token))
                history.push("/HomePage")
                
            }
            else
                alert("Login falied")
        })
        .catch(err => {
            console.log("Error Login: ", err)
        })
    }
    return(
        <div className="container text-center login">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-6">
                    <h1>Sign in</h1>
                    <a href="a" class="mb-3">Need an account?</a>
                    <fieldset className="form-group">	
                        <input className="form-control form-control-lg" value={inforLogin.email} type="email" name="email" placeholder="Email" onChange={onChangeUserName} /><br />
                        <input className="form-control form-control-lg" value={inforLogin.password} type="password" name="password" placeholder="Password" onChange={onChangePassword} />
                        <button className="btn btn-lg btn-primary pull-xs-right mt-3" type="submit" onClick={ loginClick }>Sign in</button>
                    </fieldset>
                </div>	
                
            </div>
        </div>     
    )
}
export default Login