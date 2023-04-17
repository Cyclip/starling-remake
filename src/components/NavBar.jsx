import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./navbar.css";
import {
    PERSONAL_BANKING,
    BUSINESS_BANKING,
    INVESTING
} from "./navSections";

import {
    RiBankCard2Fill
} from "react-icons/ri";

import {
    SiStarlingbank
} from "react-icons/si";

import {
    AiOutlineDown
} from "react-icons/ai";

export default function NavBar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const handleDropdown = (section) => {
        switch (section) {
            case "personal":
                if (activeDropdown === PERSONAL_BANKING) {
                    setActiveDropdown(null);
                } else {
                    setActiveDropdown(PERSONAL_BANKING);
                }
                break;
            case "business":
                if (activeDropdown === BUSINESS_BANKING) {
                    setActiveDropdown(null);
                } else {
                    setActiveDropdown(BUSINESS_BANKING);
                }
                break;
            case "investments":
                if (activeDropdown === INVESTING) {
                    setActiveDropdown(null);
                } else {
                    setActiveDropdown(INVESTING);
                }
                break;
            default:
                setActiveDropdown(null);
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setActiveDropdown(null);
          }
        }
    
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, [dropdownRef]);

    const dropdown = (
        <div className="nav-dropdown">
            <div className="nav-dropdown-wrapper">
                {
                    activeDropdown !== null ? (
                        activeDropdown.map((section, index) => {
                            return (
                                <div className="nav-dropdown-section" key={index}>
                                    <h3 className="section-name">
                                        {section.icon}
                                        {section.category}
                                    </h3>
                                    <ul className="links">
                                        {
                                            section.links.map((link, index) => {
                                                return (
                                                    <li key={index}>
                                                        <a href="#">{link.name}</a>
                                                        <p>{link.description}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    ) : null
                }
            </div>
        </div>
    );

    return (
        <nav  ref={dropdownRef}>
            <div className="nav-wrapper">
                <div className="nav-side logo-container">
                    <SiStarlingbank className="logo" />
                    <div className="logo-text">
                        <h1>Starling<br />Bank</h1>
                    </div>
                </div>

                <div className="nav-side">
                    <button className={
                        "nav-dropdown-button" +
                        (activeDropdown === PERSONAL_BANKING ? " active" : "")
                    }
                        onClick={() => handleDropdown("personal")}
                    >
                        <span className="nav-button-text">Personal banking</span>
                        <AiOutlineDown className="nav-dropdown-icon"
                            style={{
                                transform: activeDropdown === PERSONAL_BANKING ? "rotate(180deg)" : "rotate(0deg)"
                            }}
                        />
                    </button>

                    <button className={
                        "nav-dropdown-button" +
                        (activeDropdown === BUSINESS_BANKING ? " active" : "")
                    }
                        onClick={() => handleDropdown("business")}
                    >
                        <span className="nav-button-text">Business banking</span>
                        <AiOutlineDown className="nav-dropdown-icon" 
                            style={{
                                transform: activeDropdown === BUSINESS_BANKING ? "rotate(180deg)" : "rotate(0deg)"
                            }}
                        />
                    </button>

                    <button className={
                        "nav-dropdown-button" +
                        (activeDropdown === INVESTING ? " active" : "")
                    }
                        onClick={() => handleDropdown("investments")}
                    >
                        <span className="nav-button-text">Investing</span>
                        <AiOutlineDown className="nav-dropdown-icon" 
                            style={{
                                transform: activeDropdown === INVESTING ? "rotate(180deg)" : "rotate(0deg)"
                            }}
                        />
                    </button>
                </div>

                <div className="nav-side">
                    <button className="nav-button filled">
                        <span className="nav-button-text">Apply now</span>
                    </button>

                    <button className="nav-button login">
                        <RiBankCard2Fill className="icon"/>
                        <span className="nav-button-text">Log into <br />Online Banking</span>
                    </button>
                </div>
            </div>

            {/* fade in {dropdown} if not null */}
            {activeDropdown !== null ? dropdown : null}
        </nav>
    );
}