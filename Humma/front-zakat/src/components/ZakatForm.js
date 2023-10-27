import { useState } from "react"

export const ZakatForm = () => {
    const [country, setCountry] = useState("");
    const [weight, setWeight] = useState(0);
    const [response, setResponse] = useState()


    const options = [
        {value: '', text: '--Choose a purity--'},
        {value: 18, text: '18k'},
        {value: 22, text: '22k'},
        {value: 24, text: '24k'},
      ];
    
    const countries = [
        {value: '', text: '--Choose a country--'},
        {value: "afghanistan", text: 'Afghanistan'},
        {value: "iran", text: 'Iran'},
        {value: "delhi", text: 'delhi'},
    ]
    
      const [purity, setPurity] = useState(options[0].value);
    
      const handlePurity = event => {
        console.log(event.target.value);
        setPurity(event.target.value);
      };

      function handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:5000/calculateZakat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                locationForGold: country,
                purity: purity,
                weightOfGold: weight,
                locationForSilver: "",
                weightOfSilver: 0,
                savings: 0,
                savingsLocation: ""
            }),
        }).then(res => res.json()).then(data => setResponse(data))
        }
    

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Location</label>
            <input type="text" value={country} onChange={(event) => setCountry(event.target.value)}/>
        {/* <select value={country} onChange={(event) => setCountry(event.target.value)}>
        {countries.map(country => (
          <option key={country.value} value={country.value}>
            {country.text}
          </option>
        ))}
        </select> */}
        <select value={purity} onChange={handlePurity}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <label>Weight</label>
        <input type="number" value={weight} onChange={(event) => setWeight(event.target.value)} />
        <button type="submit">Submit</button>
        </form>
        <ul>
            <li>Zakat Amount {response?.zakatValue?.zakatAmount}</li>
        </ul>
        </>

    )
}