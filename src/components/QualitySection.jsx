import React, { useEffect } from "react";
import { useState } from "react";

import "./qualitySection.css";

export default function QualitySection() {
    return (
        <section className="quality-section">
            <div className="quality-section__content">
                <h1 className="title">Someone joins Starling every 38 seconds</h1>
                <p className="subtitle">
                    and you could be next. Join the 2.7 million people who are already banking with us.
                </p>

                <div className="quality-section__images">
                    <div className="quality-section__image">
                        <img src="/bbb.png" alt="bbb" />
                    </div>

                    <div className="quality-section__image">
                        <img src="/which.png" alt="which" />
                    </div>

                    <div className="quality-section__image">
                        <img src="/fscs.svg" alt="fscs" 
                            style={{
                                width: "100px",
                                height: "100px",
                                filter: "invert(1)",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}