import React from "react";
import "./demo.css";


const DemoPage = () => {
    return (
        <div className="demoContainer">
            <div className="header">
                <div className="uploadIcon">
                    upload
                </div>
                <div className="heading">
                    <h1>How to Create a Job Winning Resume</h1>
                </div>
            </div>
            <div className="demoFooter">
                <hr></hr>
                <div className="icons">
                    <div className="icon">1</div>
                    <div className="icon">
                        <div className="dashedLine">----------</div>
                        <div className="">2</div>
                        <div className="dashedLine">----------</div>
                    </div>
                    <div className="icon">3</div>
                </div>
                <div className="numbers">
                    <div className="number">1</div>
                    <div className="number">2</div>
                    <div className="number">3</div>
                </div>
                <div className="textContent">
                    <div className="text">
                        Choose a professionally designed template
                    </div>
                    <div className="text">
                        fill out each section usingour expert suggestions
                    </div>
                    <div className="text">
                        Choose a professionally designed template
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DemoPage;
