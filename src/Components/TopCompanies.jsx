
import React, { useContext, useState } from 'react';

import jobs from '../Jobs/job';
import { Link } from 'react-router-dom';
import { ApplicationContext } from '../Context/ApplicationProvider';

const Featured = () => {

    const [showAlert, setShowAlert] = useState(false);

    const { appliedJobs, applyForJob } = useContext(ApplicationContext);

    const handleApply = (e, data) => {

        // Prevent Link navigation
        e.preventDefault();

        // Prevent click from going to parent Link
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
            {/* Alert */}

            {showAlert && (
                <div
                    style={{
                        position: "fixed",
                        top: "20px",
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


            {/* Heading */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "50px",
                    marginBottom: "20px",
                    marginRight: "100px",
                    marginLeft: "80px"
                }}
            >

                <h3>Featured Jobs</h3>

                <Link to="/all">
                    <p
                        style={{
                            color: "blue",
                            marginTop: "30px"
                        }}
                    >
                        View all jobs

                        <i
                            className="fa-solid fa-arrow-right"
                            style={{ marginLeft: "5px" }}
                        ></i>
                    </p>
                </Link>

            </div>


            {/* Jobs */}

            <div className="feature-section">

                {jobs
                    .filter((data) => data.featured === true)

                    // Remove already applied jobs
                    .filter(
                        (data) =>
                            !appliedJobs.some(
                                (job) => job.id === data.id
                            )
                    )

                    // Show only first 8
                    .slice(0, 8)

                    .map((data) => {

                        return (
                            <Link
                                key={data.id}
                                to={`/job/${data.id}`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit"
                                }}
                            >

                                <div className="feature-card">

                                    {/* Company logo */}

                                    <img
                                        src={data.logo}
                                        alt={data.company}
                                    />


                                    {/* Job details */}

                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "5px",
                                            padding: "0px 12px"
                                        }}
                                    >

                                        {/* Job title */}

                                        <p
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: "medium"
                                            }}
                                        >
                                            {data.title}
                                        </p>


                                        {/* Company */}

                                        <p>
                                            {data.company}
                                        </p>


                                        {/* Location */}

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


                                        {/* Salary and type */}

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
                                                maxHeight: "50px",
                                                overflow: "hidden",
                                                marginBottom: "8px"
                                            }}
                                        >

                                            {data.skills.map((skill) => (

                                                <button
                                                    key={skill}
                                                    type="button"
                                                >
                                                    {skill}
                                                </button>

                                            ))}

                                        </div>

                                    </div>


                                    {/* Apply button */}

                                    <button
                                        type="button"
                                        className="apply"
                                        onClick={(e) =>
                                            handleApply(e, data)
                                        }
                                    >
                                        Apply Now
                                    </button>

                                </div>

                            </Link>
                        );
                    })}

            </div>

        </>
    );
};

export default Featured;
