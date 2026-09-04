import React, { useContext, useState } from "react";
import jobs from "../Jobs/job";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../Context/ApplicationProvider";

const Featured = () => {
    const [showAlert, setShowAlert] = useState(false);

    const { appliedJobs, applyForJob } = useContext(ApplicationContext);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "50px",
                    marginBottom: "20px",
                    marginRight: "100px",
                    marginLeft: "80px",
                }}
            >
                <h3>Featured Jobs</h3>

                <Link to="/all">
                    <p
                        style={{
                            color: "blue",
                            marginTop: "30px",
                        }}
                    >
                        View all jobs{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                    </p>
                </Link>
            </div>

            <div className="feature-section">
                {jobs
                    .filter((data) => data.featured === true)
                    .filter(
                        (data) =>
                            !appliedJobs.some(
                                (job) => job.id === data.id
                            )
                    )
                    .slice(0, 8)
                    .map((data) => {
                        return (
                            <React.Fragment key={data.id}>
                                <Link
                                    to={`/job/${data.id}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <div className="feature-card">

                                        <img
                                            src={data.logo}
                                            alt={data.company}
                                        />

                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "5px",
                                                padding: "0px 12px",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: "medium",
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
                                                        color: "rgb(128, 128, 128)",
                                                    }}
                                                ></i>
                                                {data.location}
                                            </p>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    fontWeight: "bold",
                                                    padding: "4px",
                                                }}
                                            >
                                                <p>
                                                    <i
                                                        className="fa-solid fa-money-bill-trend-up"
                                                        style={{
                                                            marginRight: "5px",
                                                            color: "rgb(128, 128, 128)",
                                                        }}
                                                    ></i>
                                                    {data.salary}
                                                </p>

                                                <p>
                                                    <i
                                                        className="fa-regular fa-clock"
                                                        style={{
                                                            marginRight: "5px",
                                                            color: "rgb(128, 128, 128)",
                                                        }}
                                                    ></i>
                                                    {data.type}
                                                </p>
                                            </div>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: "5px",
                                                    maxHeight: "50px",
                                                    overflow: "hidden",
                                                    marginBottom: "8px",
                                                }}
                                            >
                                                {data.skills.map(
                                                    (skill, index) => (
                                                        <button
                                                            key={index}
                                                            type="button"
                                                            
                                                            
                                                        >
                                                            {skill}
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <button
                                            className="apply"
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();

                                                applyForJob(data);

                                                setShowAlert(true);

                                                setTimeout(() => {
                                                    setShowAlert(false);
                                                }, 1000);
                                            }}
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </Link>
                            </React.Fragment>
                        );
                    })}
            </div>

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
                        zIndex: 1000,
                    }}
                >
                    Applied successfully!
                </div>
            )}
        </>
    );
};

export default Featured;