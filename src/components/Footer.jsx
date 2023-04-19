import React from "react";
import "./footer.css";

const sections = [
    {
        title: "Company",
        links: ['About Starling', 'Annual Report & Pillar 3', 'Careers', 'Charity Partnerships', 'Corporate Governance Statement', 'Ethics statement', 'Gender equality', 'If Not Now, When? Initiative', 'Newsroom', 'Refer a friend scheme', 'Tax strategy', 'Women in Finance Charter']
    },
    {
        title: "Legal",
        links: ['All legal documents', 'FSCS Protection', 'Privacy Notice', 'Modern Slavery Statement', 'Carbon Reduction Plan', 'Manage cookies'],
    },
    {
        title: "Customer support",
        links: ['Cost of living', 'APP Scams Code', 'Banking glossary', 'Coronavirus support', 'Fees, rates and charges', 'Help centre', 'Responsible Disclosure', 'Security and fraud', 'Service status', 'Supporting life events', 'Website accessibility']
    },
    {
        title: "Partner with us",
        links: ['Accountant referral programme', 'B2B Banking Services', 'Developers', 'Lending Partnership Programme']
    }
];

function FooterSection(props) {
    return (
        <div className="footer__section">
            <h3 className="footer__section-title">{props.title}</h3>
            <ul className="footer__section-links">
                {props.links.map((link, index) => (
                    <li key={index} className="footer__section-link" onClick={props.openDisclaimer}>{link}</li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer(props) {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__sections">
                    {sections.map((section, index) => (
                        <FooterSection
                            key={index}
                            title={section.title}
                            links={section.links}
                            openDisclaimer={props.openDisclaimer}
                        />
                    ))}
                </div>

                <div className="footer__bottom">
                    <p className="copyright">
                        This website is unofficial and is not associated in any way with the financial services provider
                        <a href="https://www.starlingbank.com/" target="_blank" rel="noreferrer">Starling Bank</a>
                        <br />
                        Facts and figures may not be fully accurate. For official information, please visit the
                        <a href="https://www.starlingbank.com/" target="_blank" rel="noreferrer">official website</a>
                        <br /><br />

                        Please do not send any sensitive information via this website. This website is not secure and is not protected by any form of encryption.
                        All information is provided without warranty of any kind. Please do your own research before taking any financial decisions.
                        <br /><br />

                        All assets, images, logos, trademarks, and other types of Intellectual Property
                        are the property of their respective owners. This website serves as a front-end
                        demonstration of a Starling Bank website redesign. It is not intended to replace
                        or provide any services.
                    </p>
                </div>
            </div>
        </footer>
    )
}