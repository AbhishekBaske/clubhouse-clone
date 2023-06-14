import React,{useState} from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import style from "../style/phoneConfirm.module.css"

export default function PhoneConfirmation() {
    const [value,setValue] = useState()
    return <div className={style.phoneConfirmationContainer}>
        <Link to="/" className={style.backBtn}>
            <img src="../images/" alt="" />
        </Link>
        <h1>Enter your phone</h1>
        <PhoneInput
            international
            defaultCountry="US"
            value={value}
            onChange={setValue}
        />
        <p>By entering your number, You're agreeing to our <span>Terms of Services and Privacy Policy </span>Thanks!</p>
    </div>
}