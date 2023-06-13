import React from "react";

import style from "../style/phoneConfirm.module.css"

export default function PhoneConfirmation() {
    
    return <div className={style.PhoneConfirmationContainer}>
        <h1>Enter your phone</h1>
        <p>By entering your number, You're agreeing to our<span>Terms of Services and Privacy Policy</span>Thanks!</p>
    </div>
}