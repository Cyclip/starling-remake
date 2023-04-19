import React, { useState } from "react";
import "./disclaimer.css";

import { IoWarningOutline } from "react-icons/io5";

export default function Disclaimer(props) {
    const onAccept = () => {
        props.setVisible(false);
    }

    const onDecline = () => {
        window.location.href = "https://www.starlingbank.com/";
    }

    return (
        <div className={
            props.visible ? "disclaimer visible" : "disclaimer"
        }>
            <div className="diclaimer__container">
                <IoWarningOutline className="disclaimer__icon" />
                <div className="disclaimer__text">
                    <h1 className="disclaimer__title">Legal Disclaimer</h1>
                    <p className="disclaimer__paragraph">
                        <span
                            style={{ fontWeight: "bold", marginRight: "0.25rem" }}
                        >This website is unofficial and is not associated in any way with the financial services provider
                        Starling Bank. This purely serves as a frontend demonstration of a Starling Bank website redesign. 
                        </span>
                        
                        It is not intended to replace or provide any services, and no functionality is included at all.
                        <br /><br />
                        All facts and figures may not be fully accurate. For official information, please visit the
                        official website by clicking on the logo below.                        
                    </p>

                    <p className="disclaimer__paragraph"
                        style={{ marginTop: "1rem", color: "var(--red)", fontSize: "0.7rem", opacity: "0.8" }}
                    >
                        Please do not send any sensitive information via this website. This website is not secure and is not protected by any form of encryption.
                        All information is provided without warranty of any kind. Please do your own research before taking any financial decisions.
                    </p>

                    <div className="disclaimer__buttons">
                        <button className="disclaimer__button"
                            onClick={onAccept}
                        >I understand</button>
                        <button className="disclaimer__button outline"
                            onClick={onDecline}
                        >Go to the official Starling Bank</button>
                    </div>
                </div>
            </div>
        </div>
    )
}