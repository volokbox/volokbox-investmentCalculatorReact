import "./UserInput.css";

export default function InputField(props){
    return(
        <p>
            <label>{props.labelName}</label>
            <input type={props.inputType} />
        </p>

        
    );
}