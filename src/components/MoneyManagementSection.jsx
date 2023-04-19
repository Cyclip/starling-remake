import React from "react";
import "./moneyManagement.css";

import { HiOutlineCalculator } from "react-icons/hi";
import { GiMoneyStack, GiReceiveMoney } from "react-icons/gi";
import { BsSafe } from "react-icons/bs";
import { SiStarlingbank } from "react-icons/si";

const cards = [
    {
        title: "Budget Planner",
        subtitle: "Understanding your spending is the first step in saving money. And, during a cost of living crisis, it can help you feel in control. Work out your budget with our Budget Planner.",
        icon: <HiOutlineCalculator />,
    },
    {
        title: "Savings Goals",
        subtitle: "Set a savings goal and we’ll help you save for it. You can even set up automatic transfers to help you reach your target.",
        icon: <GiMoneyStack />,
    },
    {
        title: "Spaces",
        subtitle: "Spaces are a great way to save for specific things. You can set up a Space for anything, from a holiday to a new car.",
        icon: <BsSafe />,
    },
    {
        title: "Overdrafts",
        subtitle: "If you need to borrow money, we can help. Our overdrafts are designed to help you manage your money, not cost you more.",
        icon: <GiReceiveMoney />,
    }
];

function Card({ title, subtitle, icon }) {
    return (
        <div className="money-section__card">
            <div className="money-section__card-icon">
                {icon}
            </div>
            <div className="money-section__card-content">
                <h2 className="money-section__card-title">{title}</h2>
                <p className="money-section__card-subtitle">{subtitle}</p>
            </div>
        </div>
    )
}

export default function MoneyManagementSection() {
    return (
        <section className="money-section">
            <div className="money-section__content">
                <h1 className="title">Budgeting made <span style={{ color: "var(--green)" }}>easier</span></h1>
                <p className="subtitle">
                    Starling's budgeting tools help you keep track of your spending and save more.
                </p>

                <div className="money-section__cards">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>

                <div className="money-section__button_container">
                    <button className="money-section__button">
                        <SiStarlingbank />
                        Get started with Starling
                    </button>
                </div>
            </div>

            <div className="money-section__image">
                <img src="/money-management.png" alt="money management" />
            </div>
        </section>
    )
}