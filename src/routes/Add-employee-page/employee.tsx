import { RightSideDashboard } from "../../components/Dashboard-left-side/Dashboard";
import { Textfield } from "../../components/Inputs";
import "./employee.css";

const AddEmployees=()=>{
    return(
        <div className="emplo">
            <div className="dash-Left">
            <RightSideDashboard/>
            </div>

            <div className="dash-Right">
            <form action=" " className="formm">
            <h1>Add Employees</h1>

                <div className="m-field">
            <Textfield name="Names" type="number"  variant="two" label="Full name" helperText=""/>
            <Textfield name="Names" type="text" variant="two" label="Qualification Level" helperText=""/>
            </div>

            <div className="m-field">
            <Textfield name="Names" type="text" variant="two" label="Email" helperText=""/>
            <Textfield name="Names" type="text" variant="two" label="Country-id" helperText=""/>
            </div>
            <div className="m-field">
            <Textfield name="Names" type="email" variant="two" label="Phone number" helperText=""/>
            <Textfield name="Names" type="text" variant="two" label="User-id" helperText=""/>
            </div>
            <div className="m-field">
            <Textfield name="Names" type="number" variant="two" label="Employment status" helperText=""/>
            <Textfield name="Names" type="number" variant="two" label="Dep-id" helperText=""/>
            </div>
            <div className="m-field1">
            <Textfield name="Names" type="text" variant="two" label="matial status" helperText=""/>
            </div>

            <div className="m-field1">
            <Textfield name="Names"  type="date" variant="two" label="Start Date" helperText=""/>
            </div>

            <div className="m-field1">
            <Textfield name="Names"  type="date" variant="two" label="Date of birth" helperText=""/>
            </div>
            <button className="bton no-border-radius">Submit</button>
            <div className="radio">
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
      </div>
            

            </form>
            </div>
        </div>

    )
}
export default AddEmployees;