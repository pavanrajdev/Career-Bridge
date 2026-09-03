
import React, { createContext, useState } from 'react';

export const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {

    const [appliedJobs, setAppliedJobs] = useState([]);

    const applyForJob = (job) => {
        setAppliedJobs((prev) => [...prev, job]);
    };

    return (
        <ApplicationContext.Provider
            value={{ appliedJobs, applyForJob }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};

export default ApplicationProvider;

