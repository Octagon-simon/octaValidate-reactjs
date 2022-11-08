import { octaValidate } from "octavalidate-reactjs";

export default function validationTest(){
    //handle form submission
    const handleSubmit = (e) => {
        //initialize the library
        const myForm = new octaValidate('form_demo')
        //add a custom rule to validate a password
        myForm.customRule('PASS', /12345/, 'Your password must be 12345')
        //prevent reload
        e.preventDefault()
        //validate the form
        if(myForm.validate()){
            //process form data here
            alert('validation successful')
        }
    }
    return(
        <form noValidate onSubmit={handleSubmit} id="form_demo">
            <div>
                <label>Your email</label> <br/>
                <input id="inp_email" type="email" octavalidate="R,EMAIL"/>
            </div>
            <div>
                <label>Your username</label> <br/>
                <input id="inp_uname" type="text" octavalidate="R,USERNAME"/>
            </div>
            <div>
                <label>Your age</label> <br/>
                <input id="inp_age" type="text" length="2" octavalidate="R,DIGITS"/>
            </div>   
            <div>
                <label>Your password</label> <br/>
                <input id="inp_pass" type="password" octavalidate="R,PASS"/>
            </div> <br/>
            <button type="submit"> Submit </button> 
        </form>
    )
}