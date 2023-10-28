import React from "react";

export default function Zakat(props) {
  return (
    <div className="container">
      {props.response?.zakatValue?.zakatAmount && (
        <ul>
          <p>
            <i>
              And establish prayer and give Zakat, and whatever good you put
              forward for yourselves – you will find it with Allah.” (2:110,
              Qur'an)
            </i>
          </p>
          <li> <b> Zakat Amount: </b> <i> {props.response?.zakatValue?.zakatAmount} USD </i> </li>
          <h3>Don't forget to pay!</h3>
        </ul>
      )}
    </div>
  );
}
