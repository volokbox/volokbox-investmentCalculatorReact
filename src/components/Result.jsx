import './Result.css';
import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Result({ userInput }){
    let resultData = calculateInvestmentResults(userInput);

    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total interest</th>
                    <th>Invested Capital</th>
                </tr>   
            </thead>
            <tbody>
                {resultData.map((i) => {
                    const totalInterest = 
                        i.valueEndOfYear -
                        i.annualInvestment * 
                        i.year -
                        userInput.initialInvestment;

                    const totalAmountInvested = 
                        i.valueEndOfYear - totalInterest;

                    return(
                        <tr key={i.year}>
                            <td>{i.year}</td>
                            <td>{formatter.format(i.valueEndOfYear)}</td>
                            <td>{formatter.format(i.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>             
        </table>
    );
}