import invImg from '../assets/investment-calculator-logo.png';
import './Header.css';

export default function Header(){
    return (
        <header id='header'>
            <img src={invImg} alt="Investment Calculator" />
            <h1>Investment Calculator</h1>
        </header>        
    );
}