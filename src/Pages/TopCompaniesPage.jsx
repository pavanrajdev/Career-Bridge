
import React, { useContext, useState } from "react";
import jobs from "../Jobs/job";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ApplicationContext } from "../Context/ApplicationProvider";

const TopCompaniesPage = () => {

    const [showAlert, setShowAlert] = useState(false);

    const { appliedJobs, applyForJob } = useContext(ApplicationContext);

    // First get only Top Company jobs
    // Then remove jobs which are already applied
    const item = jobs.filter(
        (data) =>
            data.topCompany === true &&
            !appliedJobs.some((job) => job.id === data.id)
    );

    console.log("Top company jobs:", item);
    console.log("Count:", item.length);

    const handleApply = (e, data) => {

        // Stop Link from navigating to /job/:id
        e.preventDefault();
        e.stopPropagation();

        // Apply for the job
        applyForJob(data);

        // Show alert
        setShowAlert(true);

        // Hide alert after 2 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    return (
        <>
            <Navbar />

            {/* Alert */}
            {showAlert && (
                <div
                    style={{
                        position: "fixed",
                        top: "80px",
                        right: "20px",
                        backgroundColor: "green",
                        color: "white",
                        padding: "12px 20px",
                        borderRadius: "5px",
                        zIndex: 1000
                    }}
                >
                    Job Applied Successfully!
                </div>
            )}

            <div className="feature-section">

                {item.map((data) => (

                    <Link
                        key={data.id}
                        to={`/job/${data.id}`}
                        style={{
                            textDecoration: "none",
                            color: "inherit"
                        }}
                    >

                        <div className="feature-card">

                            <img src={data.logo} alt="" />

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "5px",
                                    padding: "0px 12px"
                                }}
                            >

                                <p
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "medium"
                                    }}
                                >
                                    {data.title}
                                </p>

                                <p>{data.company}</p>

                                <p>
                                    <i
                                        className="fa-solid fa-location-dot"
                                        style={{
                                            marginRight: "5px",
                                            color: "rgb(128, 128, 128)"
                                        }}
                                    ></i>

                                    {data.location}
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        fontWeight: "bold",
                                        padding: "4px"
                                    }}
                                >

                                    <p>
                                        <i
                                            className="fa-solid fa-money-bill-trend-up"
                                            style={{
                                                marginRight: "5px",
                                                color: "rgb(128, 128, 128)"
                                            }}
                                        ></i>

                                        {data.salary}
                                    </p>

                                    <p>
                                        <i
                                            className="fa-regular fa-clock"
                                            style={{
                                                marginRight: "5px",
                                                color: "rgb(128, 128, 128)"
                                            }}
                                        ></i>

                                        {data.type}
                                    </p>

                                </div>

                                {/* Skills */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "5px",
                                        height: "35px",
                                        overflow: "hidden",
                                        marginBottom: "10px"
                                    }}
                                >

                                    {data.skills.map((skill, idx) => (
                                        <button
                                            key={idx}
                                            style={{
                                                minHeight: "15px",
                                                marginBottom: "0px",
                                                padding: "0px"
                                            }}
                                        >
                                            {skill}
                                        </button>
                                    ))}

                                </div>

                                {/* Apply Button */}
                                <div>

                                    <button
                                        className="apply"
                                        onClick={(e) =>
                                            handleApply(e, data)
                                        }
                                    >
                                        Apply Now
                                    </button>

                                </div>

                            </div>

                        </div>

                    </Link>

                ))}

            </div>
        </>
    );
};

export default TopCompaniesPage;
