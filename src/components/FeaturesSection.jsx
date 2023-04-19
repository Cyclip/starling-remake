import React, { useEffect } from "react";
import { useState } from "react";

import {
    IoMdNotificationsOutline
} from "react-icons/io";
import { FiGlobe } from "react-icons/fi";
import { AiOutlineUnlock } from "react-icons/ai";
import { BsPiggyBank } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { GiUpgrade } from "react-icons/gi";

import "./featuresSection.css";

const FEATURES = [
    {
        title: "Instant Notifications",
        description: "Keep track of your spending in real-time with instant notifications every time you make a payment.",
        icon: <IoMdNotificationsOutline />
    },
    {
        title: "Fee-free Spending Abroad",
        description: "We don't charge any fees on purchases while you're abroad.",
        icon: <FiGlobe />
    },
    {
        title: "In-app card lock/unlock",
        description: "Misplaced your card? Lock it instantly from within the Starling app to keep your money safe",
        icon: <AiOutlineUnlock />
    },
    {
        title: "Goals and spaces",
        description: "Set goals and save for them with Spaces. You can even set up Spaces for your kids.",
        icon: <FaMoneyCheckAlt />
    },
    {
        title: "Savings",
        description: "Save effortlessly with our Savings feature, which automatically puts money aside for you based on your spending habits.",
        icon: <BsPiggyBank />
    },
    {
        title: "100% Digital Signup",
        description: "Sign up for a Starling account in minutes, right from your phone.",
        icon: <IoPhonePortraitOutline />
    },
];

function FeatureCard(props) {
    return (
        <div className="feature-card">
            <div className="feature-card__icon">
                {props.icon}
            </div>
            <div className="feature-card__content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default function FeaturesSection() {
    return (
        <section className="features-section">
            <div className="features-section__content">
                <div className="title">
                    <h2>
                        Banking that works for 
                        <span className="blue"> you.
                            
                        </span>
                    </h2>
                </div>

                <div className="features-section__cards">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>

                <div className="features-section__switchToStarling">
                    <img src="/cass.png" alt="Cass" />
                    <div className="features-section__switchToStarling__content">
                        <h3>Switch your current account to Starling</h3>
                        <p>
                        Streamline your finances and get total visibility over your money by switching your current account over to Starling today with the Current Account Switch Service. It’s free, easy and we’ll handle everything for you.
                        </p>
                    </div>
                    <button className="switch-to-starling">
                        <GiUpgrade />
                        Switch
                    </button>
                </div>
            </div>
        </section>
    )
}