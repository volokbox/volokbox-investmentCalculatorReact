import InputField from './InputField';
import './UserInput.css';
import { useState } from 'react';

export default function UserInput(){
    const[ inputContent, setInputContent ] = useState({
        initInvest: 15000,
        annInvest: 1000,
        expReturn: 6,
        duration: 12
    }) 

    function inputHandler(id, value){
        setInputContent(id, value)
    }

    return (
        <section id="user-input">
            <div className='input-group'>
                <InputField labelName="Intial Investment" inputType="number"/>
                <InputField labelName="Annual Investment" inputType="numbe"/>   
            </div>
            <div className="input-group">
                <InputField labelName="Expected Return" inputType="number"/>
                <InputField labelName="Duration" inputType="number"/>
            </div>
            
        </section>
    );
}