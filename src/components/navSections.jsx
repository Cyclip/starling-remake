import { AiFillStar } from 'react-icons/ai';
import {
    FaBalanceScaleLeft
} from 'react-icons/fa';
import {
    BsFillBoxFill
} from 'react-icons/bs';
import {
    BiSupport, BiTransferAlt
} from 'react-icons/bi';
import {
    GiReceiveMoney
} from 'react-icons/gi';
import {
    MdCoronavirus
} from 'react-icons/md';

export const PERSONAL_BANKING = [
    {
        category: "Accounts",
        icon: <FaBalanceScaleLeft />,
        links: [
            {
                name: "Current account",
                description: "Our award winning current accounts",
            },
            {
                name: "Savings account",
                description: "Earn interest on your money",
            },
            {
                name: "Joint account",
                description: "Simplify shared spending"
            },
            {
                name: "Euro account",
                description: "A euro bank account in the UK",
            },
            {
                name: "Starling Kite",
                description: "A debit card for kids",
            },
            {
                name: "Student account",
                description: "Better banking for students",
            },
        ]
    },
    {
        category: "Features",
        icon: <AiFillStar />,
        links: [
            {
                name: "Starling Pay",
            },
            {
                name: "Fixed rate savings",
            },
            {
                name: "Virtual cards",
            },
            {
                name: "Disposable cards",
            },
            {
                name: "Online banking",
            },
            {
                name: "Mobile cheque deposits",
            },
            {
                name: "Connected cards",
            },
            {
                name: "No fees travel",
            },
            {
                name: "Bills Manager",
            },
            {
                name: "Personal finance marketplace",
            },
            {
                name: "All app features",
            }
        ]
    },
    {
        category: "Essentials",
        icon: <BsFillBoxFill />,
        links: [
            {
                name: "How to apply for an account",
                description: "Open a bank account online using only your smartphone - it's quick, straight-forward and easy."
            },
            {
                name: "Compare to other banks",
                description: "See how Starling compares to other banks and building societies."
            },
            {
                name: "Security and fraud",
                description: "Find out how we protect your money and your data."
            },
            {
                name: "Our fees, rates, and charges",
                description: "Competitive rates and no hidden fees."
            },
            {
                name: "Switch to Starling",
                description: "Easy, seamless and mobile-first banking experience"
            }
        ]
    },
    {
        category: "Support",
        icon: <BiSupport />,
        links: [
            {
                name: "Budget planner",
            },
            {
                name: "Cost of living",
            },
            {
                name: "In-app help centre",
            },
            {
                name: "COVID-19 support",
            },
            {
                name: "Customer support",
            }
        ]
    }
];


export const BUSINESS_BANKING = [
    {
        category: "Accounts",
        icon: <FaBalanceScaleLeft />,
        links: [
            {
                name: "Business account",
                description: "For limited companies and other registered businesses",
            },
            {
                name: "Sole trader account",
                description: "Whether you're self-employed or side-hustling",
            },
            {
                name: "Multi-currency accounts",
                description: "US dollar and euro bank accounts currently available for UK businesses"
            }
        ]
    },
    {
        category: "Features",
        icon: <AiFillStar />,
        links: [
            { name: "Fixed rate business savings "},
            { name: "Business toolkit" },
            { name: "Online banking" },
            { name: "Mobile cheque deposits" },
            { name: "Bills manager" },
            { name: "Business spending insights" },
            { name: "Business marketplace" },
            { name: "All app features" }
        ]
    },
    {
        category: "Essentials",
        icon: <BsFillBoxFill />,
        links: [
            {
                name: "How to apply for an account",
                description: "Open a bank account online using only your smartphone - it's quick, straight-forward and easy."
            },
            {
                name: "Compare to other banks",
                description: "See how Starling compares to other banks and building societies."
            },
            {
                name: "Security and fraud",
                description: "Find out how we protect your money and your data."
            },
            {
                name: "Our fees, rates, and charges",
                description: "Competitive rates and no hidden fees."
            },
            {
                name: "Switch to Starling",
                description: "Easy, seamless and mobile-first banking experience"
            }
        ]
    },
    {
        category: "Resources",
        icon: <BiSupport />,
        links: [
            { name: "Latest business guide" },
            { name: "Browse free business guides" },
            { name: "Business class" },
            { name: "In-app help centre" },
            { name: "COVID-19 support" },
            { name: "Customer case studies" },
            { name: "COVID-19 Government support" }
        ]
    }
];

export const INVESTING = [
    {
        category: "Lending",
        icon: <GiReceiveMoney />,
        links: [
            {
                name: "Personal overdraft",
                description: "A little extra support from time to time"
            },
            {
                name: "Business overdraft",
                description: "Built to give your business a cashflow boost"
            },
            {
                name: "Business loan",
                description: "A fair and flexible loan for your business"
            },
            {
                name: "Overdraft cost calculator"
            },
            {
                name: "Overdraft eligibility tool"
            }
        ]
    },
    {
        category: "COVID-19 support",
        icon: <MdCoronavirus />,
        links: [
            {
                name: "Government support"
            },
            {
                name: "Repaying your Bounce Back Loan",
            },
            {
                name: "Pay as you grow options"
            }
        ]
    },
    {
        category: "Transfers",
        icon: <BiTransferAlt />,
        links: [
            {
                name: "Send money domestically",
                description: "Easy, fast, and secure local money transfers"
            },
            {
                name: "Send money abroad",
                description: "Transfer to bank accounts in 36 countries worlwide"
            },
        ]
    }
];