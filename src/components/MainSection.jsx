import React, { useEffect } from "react";
import { useState } from "react";

import "./mainSection.css";

export default function MainSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function logit() {
            setScrollY(window.scrollY);
        }

        window.addEventListener("scroll", logit);

        return () => {
            window.removeEventListener("scroll", logit);
        }
    }, []);

    return (
        <section className="main-section">
            <div className="main-section__content">
                <h1 className="title">Award-winning bank accounts</h1>
                <p className="subtitle">
                    No branches, no problem. Get more from your money with Starling's online bank accounts.
                </p>

                <div className="main-section__buttons">
                    <button className="main-section__button">Open an account</button>
                    <button className="main-section__button outline">Learn more</button>
                </div>

                <div className="main-section__stats">
                    <div className="main-section__stat">
                        <p className="main-section__stat-number">2.7m</p>
                        <p className="main-section__stat-text">active personal users</p>
                    </div>

                    <div className="main-section__stat">
                        <p className="main-section__stat-number">£9bn</p>
                        <p className="main-section__stat-text">total deposits in 2022</p>
                    </div>

                    <div className="main-section__stat">
                        <p className="main-section__stat-number">£0/month</p>
                        <p className="main-section__stat-text">monthly fee</p>
                    </div>
                </div>
            </div>
            <div className="main-section__image">
                <img src="/fees-cards.png" alt="starling cards"
                    style={{
                        transform: `translateY(${scrollY * 0.3}px)`,
                    }}
                />
            </div>
            <div className="main-section__bg">
                <img src="/bg.jpg" alt="starling background" />
            </div>
        </section>
    )
}