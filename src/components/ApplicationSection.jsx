import React, { useEffect } from 'react';
import "./applicationSection.css";

const timelineData = [
    {
        title: 'Download the app',
        description: 'Download the Starling app from the App Store or Google Play.',
    },
    {
        title: "Create an account",
        description: "using your phone number, email address, and a password.",
    },
    {
        title: "Verify your identity",
        description: "using your passport, driving licence, or any other form of ID, all through the app.",
    },
    {
        title: "Start banking with Starling!",
        description: "Get instant payment alerts, categorised spending insights. Create saving goals, split bills, and do everything you used to do on a branch, on your phone."
    }
];


function TimelineItem(props) {
    return (
        <li className='timeline-item'>
            <div className='timeline-separator'>
                <span className='timeline-separator__circle'>
                    {props.number}
                </span>
                <span className='timeline-separator__line'></span>
            </div>

            <div className='timeline-content'>
                <h3 className='timeline-content__title'>{props.title}</h3>
                <p className='timeline-content__description'>{props.description}</p>
            </div>
        </li>
    )
}

function Timeline(props) {
    return (
        <ul className='timeline'>
            {props.data.map((item, index) => {
                return (
                    <TimelineItem
                        key={index}
                        number={index + 1}
                        title={item.title}
                        description={item.description}
                    />
                )
            })}
        </ul>
    )
}

export default function ApplicationSection() {
    const [scrollY, setScrollY] = React.useState(0);

    useEffect(() => {
        function logit() {
            setScrollY(window.scrollY);
        }

        window.addEventListener("scroll", logit);

        return () => {
            window.removeEventListener("scroll", logit);
        };
    }, []);

    return (
        <section className='app-section'>
            <div className='app-section__container'>
                
                <h1 className='app-section__title'>How to get started with <span
                    style={{ color: '#F9A826' }}
                >Starling</span></h1>

                <div className='app-section__content'>
                    <div className='app-section__image'>
                        <img src="/pca.png" alt="phone" 
                            // change on scroll
                            style={{
                                transform: `translateY(${(scrollY * 0.15) - 170}px)`,
                                opacity: `${2 - (scrollY * 0.001)}`
                            }}
                        />
                    </div>
                    <div className='app-section__timeline'>
                        <Timeline data={timelineData} />
                    </div>
                </div>
            </div>
        </section>
    )
}