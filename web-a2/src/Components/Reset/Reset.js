import React, {Component} from "react";
import'./Reset.css'


class Reset extends Component{
    state = {
        originalPass:"",
        Password:"",
        NewPassword:""
    }

    setPassHandler=(event)=>{
        this.setState({Password:event.target.value})

    }

    setNewPassHandler=(event)=>{

        this.setState({NewPassword:event.target.value})

    }

    validation =(event)=>{
        console.log(this.state.Password);
        console.log(this.state.NewPassword);


        if(this.state.Password!==this.state.NewPassword){
            // console.log(this.state.Password,this.state.NewPassword)
            // event.target.setCustomValidity("Password Do not match")
            alert("Passwords don't match");
            event.preventDefault()
        }else if (this.state.Password.length!==0){
            alert("Password successfully changed, click on home button")
            this.setState({originalPass:this.state.Password})
            event.preventDefault()
        }else {
            alert("Blank password not accepted");
            event.preventDefault()
        }

}

 render(){
        return(
            <div className="d-flex justify-content-center align-items-center login-container">
                <form className="login-form text-center"  action='/' >
                    <h1 className="mb-5 font-weight-light text-uppercase">Reset Password</h1>
                    <div className="form-group">
                        <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Enter new password" name="up" required onChange={this.setPassHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Re-enter the new password" name="up2" required onChange={this.setNewPassHandler}/>
                    </div>
                    <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase" value="Create account"onClick={this.validation.bind(this)}>Submit
                    </button>
                </form>
            </div>
            )

 }


}

export default Reset;
