import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login=()=>{
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [userNameErr,setUserNameErr]=useState({});
    const [passwordErr,setPasswordErr]=useState({});
    const [submitVal,setSubmitVal]=useState();
  
    const submitHandler = (e) => {
        e.preventDefault();
        const isValid=formValidation();
        
        axios.get('http://localhost:3000/users?userName='+userName+'&password='+password).then(Response=>{
         
            if(Response.data.length==1){
              setSubmitVal(true);
              localStorage.setItem('userName',Response.data[0].userName);
              localStorage.setItem('accountType',Response.data[0].account)
              localStorage.setItem('idm',Response.data[0].idm)
              localStorage.setItem('id',Response.data[0].id)
            
            }
            else{
                alert("invalid");
                setSubmitVal(false);
            }
        })
        .catch(error=>{
            alert("INVALID");
            console.log(error)
        })
        
      }
        
    
    const formValidation=()=>{
        let isValid=true;
        const userNameErr={};
        const passwordErr={};

        if(!userName){
            userNameErr.noName="Name not mentioned";
            isValid=false;
        }
        //password validation
        if(!password){
            passwordErr.noPassword="password not mentioned";
        }
        setUserNameErr(userNameErr);
        setPasswordErr(passwordErr);
        return isValid
    }

    return <div className="bgclr">
          <div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="card m-3 col-6" style={{backgroundColor:"#d0c9c3",borderRadius:"1.5rem"}}>
                <br/>
                <h3 className="card-header text-center" style={{backgroundColor:"#414654",color:"whitesmoke",borderRadius:"1.5rem"}}>Login Form</h3>
           
            <div className="card-body">
    <form onSubmit={submitHandler}>
    <div className="offset-2">
    <div className="form-group">
   
            <label htmlFor="userName">UserName</label>
            <input type="userName" className="form-control" name="userName" id="userName" onChange={(e)=>setUserName(e.target.value)}></input>
            {Object.keys(userNameErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{userNameErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}></input>
            {Object.keys(passwordErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{passwordErr[key]}</div>
            })}
            </div>
            <div className="text-center">
                {submitVal===true?<Link to={{pathname:'/Demo'}}>
            <button type="submit" id="loginsubmit" className="btn btn-primary mr-1">Submit</button>
            </Link>:<button type="submit" id="loginsubmit" className="btn btn-primary mr-1">Submit</button>}
        </div>
        <div className="text-center">
                    <Link to={{pathname:'/Registration'}}>  <small>New User create account</small></Link>
        </div>
        </div>
    </form>
    </div>
    </div>
  
    </div>
    </div>
</div>
}

export default Login;