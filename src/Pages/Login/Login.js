import { useState , useEffect } from "react";
import { useNavigate , Link , useLocation } from "react-router-dom";
import Axios from 'axios';
import NavBar from "../../Components/index";
import Register from '../Register/Register';

import '../../Styles/General2.css';

function Login(){
    const [ Username , setUsername ] = useState (null );
    const [ Password , setPassword ] = useState( [] );
    const [ Loading , setLoading ] = useState(false);
    const Navigate = useNavigate();
    const Location = useLocation();

    useEffect(
        () =>{
            setLoading(true);
            Axios.get("https://angry-bee-glasses.cyclic.app/allUsers").then((response) => {
                setUsers_list(response.data);
                setLoading(false);
            });
        } , []
    );
    const [ Users_list , setUsers_list ] = useState([]);

    const validate = () => {
        setLoading(true);
        if(Users_list.length === 0){
            setLoading(false)
            alert("Invalid Username!!");
        }
        else{
            for(var j = 0 ; j <= Users_list.length ; j++){
                if( Users_list[j].email.toString() === Username.toString() ){
                    if( Users_list[j].password.toString() === Password.toString() ){
                        setLoading(false)
                        Navigate('/' , {state:{id:Users_list[j]._id , user:Username , name:Users_list[j].full_name , status:"LoggedIn" , type : "user" }});
                        break;
                    }
                    else{setLoading(false);alert("Invalid Password")}
                }
                else if( j === Users_list.length-1 ){setLoading(false);alert("Invalid Username!!");}
            }
        }
    };
        
    const check = () => {
        validate();

    };

    return(
        <>
            <div className="BG">
                <div className="BG2"></div>
                <div className="clear"></div>
            </div>
            {
                (Location.state === null)?<NavBar Received={null}/>:
                <NavBar Received={ {name : Location.state.name , status: Location.state.status , user:Location.state.user , type:Location.state.type , id:Location.state.id} } />
            }
            {
                (Loading)?
                <div className='loader-main'>
                    <div className="loader"></div>
                </div>
                :
                <div className="row Main-Row w-100">
                <div className="col-4 " id="Home">
                <div className="overall">
                <div className="">
                    <div className="container">
                        <p className="Login-Header">SIGN IN</p>
                        <div>
                            <form>
                                <p className="label-log-attributes">
                                    USERNAME:
                                </p>
                                <br></br>
                                <input type="text" placeholder="Email......" 
                                    className="input-log-attributes w-100"
                                    onChange={(event)=>{setUsername(event.target.value)}}>
                                </input>
                                <br></br>
                                <p className="label-log-attributes">
                                    PASSWORD:
                                </p>
                                <br></br>
                                <input type="password" placeholder="Password......" 
                                    className="input-log-attributes w-100"
                                    onChange={(event)=>{setPassword(event.target.value)}}>
                                </input>
                                <button className="final-button general-button"
                                    onClick={()=>{validate()}} type="button">
                                    GET IN
                                    <i className="fi fi-br-angle-right end-icons-err"></i>
                                </button>
                                <Link to="/ForgotPassword" className='forgot-password'>Forgot Password ?</Link>
                            </form>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
                </div>
                <div className="col-8 Register-Col min-input">
                    <Register/>
                </div>
            <div className="clear"></div>
            </div>
            }
        </>
    );
}

export default Login;