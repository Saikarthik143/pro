import React,{useState} from'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './loan.css';
import bank from '../../../src/images/bank.png';

const Loan=()=>{
    let [accountHolderName,setAccountHolderName]=useState(localStorage.getItem('userName'));
    let loanType=false;
    const[loanAmount,setLoanAmount]=useState('');
    const [loanApplyDate,setLoanApplyDate]=useState('');
    const ROI=6;
    const[duriation,setDuriation]=useState('');
    const[accountHolderNameErr]=useState({});
    const[loanAmountErr,setLoanAmountErr]=useState({});
    const[loanApplyDateErr,setLoanApplyDateErr]=useState({});
    const[ROIErr,setROIErr]=useState({});
    const[duriationErr,setDuriationErr]=useState({});
    let[selectedVal,setSelectedVal]=useState('');
    const[annualIncome,setAnnualIncome]=useState('');
    const[companyName,setCompanyName]=useState('');
    const[designation,setDesignation]=useState('');
    const[totalExp,setTotalexp]=useState('');
    const[currentExp,setCurrentExp]=useState('');
    const[annualIncomeErr,setAnnualIncomeErr]=useState({});
    const[companyNameErr,setCompanyNameErr]=useState({});
    const[designationErr,setDesignationErr]=useState({});
    const[totalExpErr,setTotalexpErr]=useState({});
    const[currentExpErr,setCurrentExpErr]=useState({});
    const[courseFee,setCourseFee]=useState('');
    const[Course,setCourse]=useState('');
    const[fatherName,setFatherName]=useState('');
    const[fatherOccupation,setFatherOccupation]=useState('');
    const[courseFeeErr,setCourseFeeErr]=useState({});
    const[CourseErr,setCourseErr]=useState({});
    const[fatherNameErr,setFatherNameErr]=useState({});
    const[fatherOccupationErr,setFatherOccupationErr]=useState({});
    let id=localStorage.getItem('id');
    const array1={
        id,
        accountHolderName,
        loanAmount,
        selectedVal,
        loanApplyDate,
        duriation,
        fatherName,
        fatherOccupation,
        Course,
        courseFee,
        ROI,
        annualIncome,
        companyName,
        totalExp,
        currentExp
    }

    const hadLoan=()=>{
        axios.get("http://localhost:3000/loan?id="+id).then(Response=>{
            console.log("http://localhost:3000/loan?id="+id)
            console.log(Response.data.length);
            if(Response.data.length!==0){
                loanType=true;
                if(Response.data[0].selectedVal==='Education'){
                    alert("you alredy have education loan")
                }
                else 
                    alert("you already have home loan") 
            }
           
        })
    }


    const submitHandler=(e)=>{
        e.preventDefault();
        const isValid=formValidation();
        if(isValid){
            hadLoan();
            if(loanType===false){
            
            axios.post('http://localhost:3000/loan',array1).then(Response=>{
                console.log(Response)
                alert('success');
            console.log("submitted");
            })
            .catch(error=>{
                console.log(error)
            })
            }
        }
        else
        alert('invalid');
    }

        const handleChange=(event)=>{
            setSelectedVal(event.target.value);
          
        }

        const dateChange=(loanApplyDate)=>{
            setLoanApplyDate(loanApplyDate);
        }
    
        const formValidation=()=>{
            let isValid=true;
            const loanAmountErr={};
            const loanApplyDateErr={};
            const ROIErr={};
            const duriationErr={};
            const annualIncomeErr={};
            const courseFeeErr={};
            const CourseErr={};
            const fatherNameErr={};
            const fatherOccupationErr={};
            const totalExpErr={};
            const currentExpErr={};
            const designationErr={};
            const companyNameErr={};
          



          
            if(!loanAmount){
                loanAmountErr.noamount="amount not mentioned";
            }

            if(typeof loanAmount!=='undefined'){
                var reg=new RegExp('^[0-9]+$');
                if(loanAmount<=0||!(reg.test(loanAmount))){
                    isValid=false;
                    loanAmountErr.nodata="amount should be greather than zero";
                }
            }
           if(!loanApplyDate){
               loanApplyDateErr.nodate="mention date";

           }
           if(!ROI){
               ROIErr.norate="mention it";
           }
           if(!courseFee){
            courseFeeErr.norate="mention it";
        }
        if(!Course){
            CourseErr.norate="mention it";
        }
        if(!fatherName){
            fatherNameErr.norate="mention it";
        }
        if(!fatherOccupation){
            fatherOccupationErr.norate="mention it";
        }
        if(!annualIncome){
            annualIncomeErr.norate="mention it";
        }
        if(!companyName){
            companyNameErr.norate="mention it";
        }
        if(!designation){
            designationErr.norate="mention it";
        }
        if(!totalExp){
            totalExpErr.norate="mention it";
        }
        if(!currentExp){
            currentExpErr.norate="mention it";
        }

           if(!duriation){
               duriationErr.notime="mention";
           }
           setDuriationErr(duriationErr);
           setLoanAmountErr(loanAmountErr);
           setLoanApplyDateErr(loanApplyDateErr);
           setROIErr(ROIErr);
           setAnnualIncomeErr(annualIncomeErr);
           setCourseErr(CourseErr);
           setCourseFeeErr(courseFeeErr);
           setFatherOccupationErr(fatherOccupationErr);
           setFatherNameErr(fatherNameErr);
           setCompanyNameErr(companyNameErr);
           setDesignationErr(designationErr);
           setTotalexpErr(totalExpErr);
           setCurrentExpErr(currentExpErr);
           return isValid;

        }
     
        const Logout=()=>{
            localStorage.clear();
        }



    return <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#fa983a"}}>
    <div className="col">
        <ul className="nav row nav pills">
            <li className="col-sm-3 nav-item text-center">
            <Link to={{pathname:'/Demo'}}>
                    <img className="card-img-top" src={bank} alt="card" style={{width:"100px",height:"50px"}}/>
                   
                        </Link>
            </li>
            <li class="col-sm-3 nav-item text-center" style={{fontFamily:"David Libre",fontWeight:"bold"}}>
                <Link to={{pathname:'/'}} className="nav-link btn-outline-light"   >About Us</Link>
            </li>
            <li className="col-sm-3 nav-item text-center">
                 <Link to={{pathname:'/'}} className="nav-link btn-outline-light" style={{fontFamily:"David Libre",fontWeight:"bold"}} >ViewProfile</Link>
            </li>
            <li className="col-sm-3 nav-item text-center">
            <Link to={{pathname:'/Login',hash:'#Login'}}>
                 <button className="btn btn-outline-light" style={{fontFamily:"David Libre",fontWeight:"bold"}} onClick={Logout}>Logout </button> 
               </Link>
            </li>
        </ul>
    </div>
</nav>
   
<div className="bgclr">
         <div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="card m-3 col-6" style={{backgroundColor:"#d0c9c3",borderRadius:"1.5rem"}}>
                <br/>
                <h3 className="card-header text-center" style={{backgroundColor:"#414654",color:"whitesmoke",borderRadius:"1.5rem"}}>Loan Form</h3>
           
            <div className="card-body">
        <form onSubmit={submitHandler}>
            <div className="offset-2">
                     <div className="form-group">
            <label htmlFor="accountHolderName">accountHolderName</label>
            <input type="accountHolderName" className="form-control" name="accountHolderName" id="accountHolderName" value={accountHolderName} onChange={(e)=>setAccountHolderName(e.target.value)}></input>
            {Object.keys(accountHolderNameErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{accountHolderNameErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="loanType">Loan Type</label>
            <select value={selectedVal} onChange={handleChange}>
                <option value="none">Select Option</option>
                <option value="Personal/Home Loan">Personal/Home Loan</option>
                <option value="Education">Education</option>
            </select>
         
            {
                selectedVal==='Personal/Home Loan'?<div><form>
                     <div className="form-group">
            <label htmlFor="annualIncome">Annual Income</label>
            <input type="annualIncome" className="form-control" name="annualIncome" id="annualIncome" onChange={(e)=>setAnnualIncome(e.target.value)}></input>
            {Object.keys(annualIncomeErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{annualIncomeErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input type="companyName" className="form-control" name="companyName" id="companyName" onChange={(e)=>setCompanyName(e.target.value)}></input>
            {Object.keys(companyNameErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{companyNameErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input type="designation" className="form-control" name="designation" id="designation" onChange={(e)=>setDesignation(e.target.value)}></input>
            {Object.keys(designationErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{designationErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="totalExp">Total Experience</label>
            <input type="totalExp" className="form-control" name="totalExp" id="totalExp" onChange={(e)=>setTotalexp(e.target.value)}></input>
            {Object.keys(totalExpErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{totalExpErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="currentExp">current Experience</label>
            <input type="currentExp" className="form-control" name="currentExp" id="currentExp" onChange={(e)=>setCurrentExp(e.target.value)}></input>
            {Object.keys(currentExpErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{currentExpErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="ROI">ROI</label>
            <input type="ROI" className="form-control" name="ROI" id="ROI" value={ROI} readOnly='readonly'></input>
           
        </div>
                </form></div>
                :selectedVal==='Education'?<div><form>
                     <div className="form-group">
            <label htmlFor="courseFee">CourseFee</label>
            <input type="courseFee" className="form-control" name="courseFee" id="courseFee" onChange={(e)=>setCourseFee(e.target.value)}></input>
            {Object.keys(courseFeeErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{courseFeeErr[key]}</div>
            })}

        </div>
        <div className="form-group">
            <label htmlFor="course">Course</label>
            <input type="course" className="form-control" name="course" id="course" onChange={(e)=>setCourse(e.target.value)}></input>
            {Object.keys(CourseErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{CourseErr[key]}</div>
            })}
            
        </div>
        <div className="form-group">
            <label htmlFor="fatherName">Father Name</label>
            <input type="fatherName" className="form-control" name="fatherName" id="fatherName" onChange={(e)=>setFatherName(e.target.value)}></input>
            {Object.keys(fatherNameErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{fatherNameErr[key]}</div>
            })}
            
        </div>
        <div className="form-group">
            <label htmlFor="fatherOccupation">father Occupation</label>
            <input type="fatherOccupation" className="form-control" name="fatherOccuption" id="fatherOccuption" onChange={(e)=>setFatherOccupation(e.target.value)}></input>
            {Object.keys(fatherOccupationErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{fatherOccupationErr[key]}</div>
            })}
            
        </div>
        <div className="form-group">
            <label htmlFor="annualIncome">Annual Income</label>
            <input type="annualIncome" className="form-control" name="annualIncome" id="annualIncome" onChange={(e)=>setAnnualIncome(e.target.value)}></input>
            {Object.keys(annualIncomeErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{annualIncomeErr[key]}</div>
            })}
            
        </div>
        <div className="form-group">
            <label htmlFor="ROI">ROI</label>
            <input type="ROI" className="form-control" name="ROI" id="ROI" value={ROI} readOnly='readonly'></input>
           
        </div>
                </form></div>:null
            }
           
        </div>
        <div className="form-group">
            <label htmlFor="loanAmount">loanAmount</label>
            <input type="loanAmount" className="form-control" name="loanAmount" id="loanAmount" onChange={(e)=>setLoanAmount(e.target.value)}></input>
            {Object.keys(loanAmountErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{loanAmountErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="loanApplyDate">loanApplyDate</label>
            <DatePicker type="loanApplyDate" className="form-control" name="loanApplyDate" id="loanApplyDate" selected={loanApplyDate} onChange={dateChange} minDate={new Date()} maxDate={new Date()}/>
            {Object.keys(loanApplyDateErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{loanApplyDateErr[key]}</div>
            })}
        </div>
       
        <div className="form-group">
            <label htmlFor="duriation">Duriation</label>
            <input type="duriation" className="form-control" name="duriation" id="duriation" onChange={(e)=>setDuriation(e.target.value)}></input>
            {Object.keys(duriationErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{duriationErr[key]}</div>
            })}
        </div>
        <div>
        <button type="submit" id="loansubmit" className="btn btn-primary mr-1">Submit</button>
        </div>
</div>
        </form>
        </div>
    </div>
  
    </div>
    </div>
</div>
  </div>
}
export default Loan;