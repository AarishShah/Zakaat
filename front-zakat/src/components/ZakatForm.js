import { useState } from "react";

import Zakat from "./Zakat";
import "../index.css";

const countries = [
  { value: "", text: "--Choose a country--" },
  { value: "afghanistan", text: "Afghanistan" },
  { value: "algeria", text: "Algeria" },
  { value: "argentina", text: "Argentina" },
  { value: "australia", text: "Australia" },
  { value: "austria", text: "Austria" },
  { value: "bangladesh", text: "Bangladesh" },
  { value: "belgium", text: "Belgium" },
  { value: "bhutan", text: "Bhutan" },
  { value: "brazil", text: "Brazil" },
  { value: "canada", text: "Canada" },
  { value: "chile", text: "Chile" },
  { value: "china", text: "China" },
  { value: "cuba", text: "Cuba" },
  { value: "denmark", text: "Denmark" },
  { value: "egypt", text: "Egypt" },
  { value: "finland", text: "Finland" },
  { value: "france", text: "France" },
  { value: "germany", text: "Germany" },
  { value: "greece", text: "Greece" },
  { value: "hong kong", text: "Hong Kong" },
  { value: "hungary", text: "Hungary" },
  { value: "indonesia", text: "Indonesia" },
  { value: "iran", text: "Iran" },
  { value: "ireland", text: "Ireland" },
  { value: "israel", text: "Israel" },
  { value: "bangladesh", text: "India" },
  { value: "italy", text: "Italy" },
  { value: "japan", text: "Japan" },
  { value: "jordan", text: "Jordan" },
  { value: "maldives", text: "Maldives" },
  { value: "mauritius", text: "Mauritius" },
  { value: "mexico", text: "Mexico" },
  { value: "morocco", text: "Morocco" },
  { value: "myanmar", text: "Myanmar" },
  { value: "nepal", text: "Nepal" },
  { value: "netherlands", text: "Netherlands" },
  { value: "new zealand", text: "New Zealand" },
  { value: "nigeria", text: "Nigeria" },
  { value: "norway", text: "Norway" },
  { value: "pakistan", text: "Pakistan" },
  { value: "philippines", text: "Philippines" },
  { value: "poland", text: "Poland" },
  { value: "portugal", text: "Portugal" },
  { value: "romania", text: "Romania" },
  { value: "russia", text: "Russia" },
  { value: "south africa", text: "South Africa" },
  { value: "spain", text: "Spain" },
  { value: "sri lanka", text: "Sri Lanka" },
  { value: "sweden", text: "Sweden" },
  { value: "switzerland", text: "Switzerland" },
  { value: "syria", text: "Syria" },
  { value: "thailand", text: "Thailand" },
  { value: "turkey", text: "Turkey" },
  { value: "uk", text: "UK" },
  { value: "usa", text: "USA" },
  { value: "vietnam", text: "Vietnam" },
  { value: "yemen", text: "Yemen" },
];

const options = [
  { value: "", text: "--Choose purity--" },
  { value: 18, text: "18k" },
  { value: 22, text: "22k" },
  { value: 24, text: "24k" },
];

const selectOptions = [
  { value: "", text: "--Select one--" },
  { value: "gold", text: "Gold" },
  { value: "silver", text: "Silver" },
  { value: "savings", text: "Savings" },
];

export const ZakatForm = () => {
  const [metal, setMetal] = useState("");
  const [country, setCountry] = useState("");
  const [weight, setWeight] = useState();
  const [purity, setPurity] = useState(options[0].value);
  const [response, setResponse] = useState();

  const handlePurity = (event) => {
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
        locationForGold: metal === "gold" ? country : "",
        purity: purity,
        weightOfGold: metal === "gold" ? weight : 0,
        locationForSilver: metal === "silver" ? country : "",
        weightOfSilver: metal === "silver" ? weight : 0,
        savings: metal === "savings" ? weight : 0,
        savingsLocation: metal === "savings" ? country : "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
      });
  }

  return (
    <div>
      <h1>Zakat Calculator</h1>
      <form className="field" onSubmit={handleSubmit}>
        <select
          value={metal}
          onChange={(event) => setMetal(event.target.value)}
        >
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <select
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.text}
            </option>
          ))}
        </select>
        {metal === "gold" ? (
          <select value={purity} onChange={handlePurity}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        ) : (
          <></>
        )}
        <input
          type="number"
          placeholder="Enter metal's weight or savings amount"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
        {metal && <button type="submit">Submit</button>}
      </form>
      <Zakat response={response} />
    </div>
  );
};
