import React, { useContext, useState } from 'react';
import jobs from '../Jobs/job';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { ApplicationContext } from '../Context/ApplicationProvider';

const CategoryPage = () => {

    const { cate } = useParams();

    const [showAlert, setShowAlert] = useState(false);

    const { appliedJobs, applyForJob } = useContext(ApplicationContext);

    // Get jobs belonging to this category
    const categoryJobs = jobs.filter(
        (item) =>
            item.title.trim().toLowerCase() === cate.trim().toLowerCase()
    );

    // Only featured jobs + remove already applied jobs
    const filteredJobs = categoryJobs.filter(
        (data) =>
            data.featured === true &&
            !appliedJobs.some((job) => job.id === data.id)
    );

    // Apply button function
    const handleApply = (e, data) => {

        // Stop Link navigation
        e.preventDefault();

        // Stop click from going to parent Link
        e.stopPropagation();

        // Apply for job
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
                    Job applied successfully!
                </div>
            )}

            <div className="category-grid">

                {
                    filteredJobs.map((data) => {

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

                                    <img
                                        src={data.logo}
                                        alt=""
                                    />

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
                                                maxHeight: "50px",
                                                overflow: "hidden",
                                                marginBottom: "8px"
                                            }}
                                        >

                                            {
                                                data.skills.map((skill, idx) => (
                                                    <button
                                                        key={idx}
                                                        style={{
                                                            minHeight: "15px",
                                                            marginBottom: "0px",
                                                            padding: "2px",
                                                            border: "1px solid black",
                                                            borderRadius: "15px",
                                                            backgroundColor: "white",
                                                            fontSize: "11px"
                                                        }}
                                                    >
                                                        {skill}
                                                    </button>
                                                ))
                                            }

                                        </div>

                                    </div>

                                    {/* Apply Button */}
                                    <button
                                        className="apply"
                                        onClick={(e) => handleApply(e, data)}
                                    >
                                        Apply Now
                                    </button>

                                </div>

                            </Link>
                        );
                    })
                }

            </div>
        </>
    );
};

export default CategoryPage;