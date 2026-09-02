import React from 'react';
import jobs from '../Jobs/job';
import { Link,useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const CategoryPage = () => {
     const { cate } = useParams();
    const categoryJobs = jobs.filter(
        (item) =>
            item.title.trim().toLowerCase() === cate.trim().toLowerCase()
    );

    return (
        <>
        <Navbar />
         <div className="category-grid">
            {
                categoryJobs
                    .filter((data) => data.featured === true)
                    .map((data, idx) => {

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

                                    <img src={data.logo} alt="" />

                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "5px",
                                            padding: "0px 12px"
                                        }}
                                    >

                                        <p style={{
                                            fontWeight: "bold",
                                            fontSize: "medium"
                                        }}>
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

                                    <button className="apply">
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