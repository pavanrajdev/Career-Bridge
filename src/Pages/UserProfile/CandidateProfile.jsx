
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CandidateProfile.css";
import Navbar from "../../Components/Navbar";

const CandidateProfile = () => {
    const navigate = useNavigate();

    // Get signup information
    const user = JSON.parse(
        localStorage.getItem("careerBridgeUser")
    );

    const [isEditing, setIsEditing] = useState(false);

    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        headline: "",
        about: "",

        degree: "",
        college: "",
        graduationYear: "",
        cgpa: "",

        skills: "",
        programmingLanguages: "",
        frameworks: "",
        databases: "",
        tools: "",

        experienceType: "Fresher",
        experienceYears: "",
        company: "",
        jobTitle: "",

        projectName: "",
        projectDescription: "",
        technologies: "",
        projectUrl: "",

        certification: "",
        certificationOrganization: "",

        desiredRole: "",
        preferredLocation: "",
        workMode: "",
        expectedSalary: "",

        github: "",
        linkedin: "",
        portfolio: "",

        resume: null,
        resumeName: ""
    });

    // Load existing profile if available
    useEffect(() => {
        const savedProfile = localStorage.getItem(
            "careerBridgeCandidateProfile"
        );

        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfile((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Resume upload
    const handleResumeUpload = (e) => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        if (file.type !== "application/pdf") {
            alert("Please upload a PDF resume.");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            setProfile((prev) => ({
                ...prev,
                resume: reader.result,
                resumeName: file.name
            }));
        };

        reader.readAsDataURL(file);
    };

    // Save profile
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!profile.fullName) {
            alert("Please enter your full name.");
            return;
        }

        if (!profile.email) {
            alert("Please enter your email.");
            return;
        }

        if (!profile.desiredRole) {
            alert("Please enter your desired job role.");
            return;
        }

        if (!profile.resume) {
            alert("Please upload your resume.");
            return;
        }

        localStorage.setItem(
            "careerBridgeCandidateProfile",
            JSON.stringify(profile)
        );

        setIsEditing(false);

        alert("Profile saved successfully!");
    };

    // If signup information doesn't exist
    if (!user) {
        return (
            <>
            <Navbar />
            <div className="profile-container">
                <div className="profile-card">
                    <h2>Please Sign Up First</h2>

                    <button
                        className="create-profile-button"
                        onClick={() => navigate("/signup")}
                    >
                        Go to Signup
                    </button>
                </div>
            </div>
            </>
        );
    }

    return (
        <>
        <Navbar />
        <div className="profile-container">

            <div className="profile-card">

                {/* ================= HEADER ================= */}

                <div className="profile-header">

                    <div>
                        <h1>
                            {profile.fullName || "Candidate Profile"}
                        </h1>

                        <p className="profile-subtitle">
                            {profile.headline ||
                                "Complete your profile to get discovered by recruiters"}
                        </p>
                    </div>

                    {!isEditing && (
                        <button
                            className="edit-profile-button"
                            onClick={() => setIsEditing(true)}
                        >
                            ✏️ Edit Profile
                        </button>
                    )}

                </div>


                {/* ================= ACCOUNT INFORMATION ================= */}

                <div className="account-info">

                    <div>
                        <span>Username</span>
                        <strong>{user.username}</strong>
                    </div>

                    <div>
                        <span>Role</span>
                        <strong>
                            {user.role === "candidate"
                                ? "👨‍💻 Candidate"
                                : "🏢 Recruiter"}
                        </strong>
                    </div>

                </div>


                {/* ================= PROFILE ================= */}

                <form onSubmit={handleSubmit}>

                    {/* BASIC INFORMATION */}

                    <div className="profile-section">

                        <h2>Basic Information</h2>

                        <div className="form-grid">

                            <div className="input-group">
                                <label>Full Name <span className="required">*</span></label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        value={profile.fullName}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.fullName || "Not provided"}
                                    </p>
                                )}

                            </div>


                            <div className="input-group">
                          <label>Email <span className="required">*</span></label>

                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={profile.email}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.email || "Not provided"}
                                    </p>
                                )}

                            </div>


                            <div className="input-group">
                                <label>Phone Number</label>

                                {isEditing ? (
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        value={profile.phone}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.phone || "Not provided"}
                                    </p>
                                )}

                            </div>


                            <div className="input-group">
                                <label>Location</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="e.g. Hyderabad, India"
                                        value={profile.location}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.location || "Not provided"}
                                    </p>
                                )}

                            </div>

                        </div>


                        <div className="input-group">
                            <label>Professional Headline</label>

                            {isEditing ? (
                                <input
                                    type="text"
                                    name="headline"
                                    placeholder="e.g. Java Full Stack Developer"
                                    value={profile.headline}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p className="view-value">
                                    {profile.headline || "Not provided"}
                                </p>
                            )}

                        </div>


                        <div className="input-group">
                            <label>About</label>

                            {isEditing ? (
                                <textarea
                                    name="about"
                                    rows="4"
                                    placeholder="Tell recruiters about yourself..."
                                    value={profile.about}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p className="view-value">
                                    {profile.about || "Not provided"}
                                </p>
                            )}

                        </div>

                    </div>


                    {/* EDUCATION */}

                    <div className="profile-section">

                        <h2>Education</h2>

                        <div className="form-grid">

                            <div className="input-group">
                                <label>Degree</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="degree"
                                        placeholder="B.Tech Computer Science"
                                        value={profile.degree}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.degree || "Not provided"}
                                    </p>
                                )}

                            </div>


                            <div className="input-group">
                                <label>College / University</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="college"
                                        placeholder="College name"
                                        value={profile.college}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.college || "Not provided"}
                                    </p>
                                )}

                            </div>


                            <div className="input-group">
                                <label>Graduation Year</label>

                                {isEditing ? (
                                    <input
                                        type="number"
                                        name="graduationYear"
                                        value={profile.graduationYear}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.graduationYear || "Not provided"}
                                    </p>
                                )}

                            </div>


                            <div className="input-group">
                                <label>CGPA / Percentage</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="cgpa"
                                        value={profile.cgpa}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.cgpa || "Not provided"}
                                    </p>
                                )}

                            </div>

                        </div>

                    </div>


                    {/* SKILLS */}

                    <div className="profile-section">

                        <h2>Skills & Abilities</h2>

                        <div className="input-group">
                            <label>Technical Skills</label>

                            {isEditing ? (
                                <input
                                    type="text"
                                    name="skills"
                                    placeholder="Java, Python, SQL, React..."
                                    value={profile.skills}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p className="view-value">
                                    {profile.skills || "Not provided"}
                                </p>
                            )}

                        </div>


                        <div className="form-grid">

                            <div className="input-group">
                                <label>Programming Languages</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="programmingLanguages"
                                        value={profile.programmingLanguages}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.programmingLanguages || "Not provided"}
                                    </p>
                                )}
                            </div>


                            <div className="input-group">
                                <label>Frameworks</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="frameworks"
                                        value={profile.frameworks}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.frameworks || "Not provided"}
                                    </p>
                                )}
                            </div>


                            <div className="input-group">
                                <label>Databases</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="databases"
                                        value={profile.databases}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.databases || "Not provided"}
                                    </p>
                                )}
                            </div>


                            <div className="input-group">
                                <label>Tools</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="tools"
                                        value={profile.tools}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.tools || "Not provided"}
                                    </p>
                                )}
                            </div>

                        </div>

                    </div>


                    {/* EXPERIENCE */}

                    <div className="profile-section">

                        <h2>Experience</h2>

                        <div className="input-group">

                            <label>Experience Type</label>

                            {isEditing ? (
                                <select
                                    name="experienceType"
                                    value={profile.experienceType}
                                    onChange={handleChange}
                                >
                                    <option value="Fresher">
                                        Fresher
                                    </option>

                                    <option value="Experienced">
                                        Experienced
                                    </option>
                                </select>
                            ) : (
                                <p className="view-value">
                                    {profile.experienceType}
                                </p>
                            )}

                        </div>


                        {profile.experienceType === "Experienced" && (

                            <div className="form-grid">

                                <div className="input-group">
                                    <label>Years of Experience</label>

                                    {isEditing ? (
                                        <input
                                            type="number"
                                            name="experienceYears"
                                            value={profile.experienceYears}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <p className="view-value">
                                            {profile.experienceYears || "Not provided"}
                                        </p>
                                    )}
                                </div>


                                <div className="input-group">
                                    <label>Previous Company</label>

                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="company"
                                            value={profile.company}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <p className="view-value">
                                            {profile.company || "Not provided"}
                                        </p>
                                    )}
                                </div>


                                <div className="input-group">
                                    <label>Job Title</label>

                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            value={profile.jobTitle}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <p className="view-value">
                                            {profile.jobTitle || "Not provided"}
                                        </p>
                                    )}
                                </div>

                            </div>

                        )}

                    </div>


                    {/* PROJECT */}

                    <div className="profile-section">

                        <h2>Projects</h2>

                        <div className="input-group">

                            <label>Project Name</label>

                            {isEditing ? (
                                <input
                                    type="text"
                                    name="projectName"
                                    value={profile.projectName}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p className="view-value">
                                    {profile.projectName || "Not provided"}
                                </p>
                            )}

                        </div>


                        <div className="input-group">

                            <label>Description</label>

                            {isEditing ? (
                                <textarea
                                    name="projectDescription"
                                    rows="4"
                                    value={profile.projectDescription}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p className="view-value">
                                    {profile.projectDescription || "Not provided"}
                                </p>
                            )}

                        </div>


                        <div className="form-grid">

                            <div className="input-group">
                                <label>Technologies</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="technologies"
                                        value={profile.technologies}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.technologies || "Not provided"}
                                    </p>
                                )}
                            </div>


                            <div className="input-group">
                                <label>Project URL</label>

                                {isEditing ? (
                                    <input
                                        type="url"
                                        name="projectUrl"
                                        value={profile.projectUrl}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.projectUrl || "Not provided"}
                                    </p>
                                )}
                            </div>

                        </div>

                    </div>


                    {/* CERTIFICATIONS */}

                    <div className="profile-section">

                        <h2>Certifications</h2>

                        <div className="form-grid">

                            <div className="input-group">
                                <label>Certification</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="certification"
                                        value={profile.certification}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.certification || "Not provided"}
                                    </p>
                                )}
                            </div>


                            <div className="input-group">
                                <label>Issuing Organization</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="certificationOrganization"
                                        value={profile.certificationOrganization}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.certificationOrganization || "Not provided"}
                                    </p>
                                )}
                            </div>

                        </div>

                    </div>


                    {/* JOB PREFERENCES */}

                    <div className="profile-section">

                        <h2>Job Preferences</h2>

                        <div className="form-grid">

                            <div className="input-group">
                                <label>Desired Job Role <span className="required">*</span></label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="desiredRole"
                                        value={profile.desiredRole}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.desiredRole || "Not provided"}
                                    </p>
                                )}
                            </div>


                            <div className="input-group">
                                <label>Preferred Location</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="preferredLocation"
                                        value={profile.preferredLocation}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.preferredLocation || "Not provided"}
                                    </p>
                                )}
                            </div>


                            <div className="input-group">
                                <label>Work Mode</label>

                                {isEditing ? (
                                    <select
                                        name="workMode"
                                        value={profile.workMode}
                                        onChange={handleChange}
                                    >
                                        <option value="">
                                            Select work mode
                                        </option>

                                        <option value="On-site">
                                            On-site
                                        </option>

                                        <option value="Hybrid">
                                            Hybrid
                                        </option>

                                        <option value="Remote">
                                            Remote
                                        </option>
                                    </select>
                                ) : (
                                    <p className="view-value">
                                        {profile.workMode || "Not provided"}
                                    </p>
                                )}
                            </div>


                            <div className="input-group">
                                <label>Expected Salary</label>

                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="expectedSalary"
                                        value={profile.expectedSalary}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.expectedSalary || "Not provided"}
                                    </p>
                                )}
                            </div>

                        </div>

                    </div>


                    {/* PROFESSIONAL LINKS */}

                    <div className="profile-section">

                        <h2>Professional Links</h2>

                        <div className="form-grid">

                            <div className="input-group">
                                <label>GitHub</label>

                                {isEditing ? (
                                    <input
                                        type="url"
                                        name="github"
                                        value={profile.github}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.github || "Not provided"}
                                    </p>
                                )}
                            </div>


                            <div className="input-group">
                                <label>LinkedIn</label>

                                {isEditing ? (
                                    <input
                                        type="url"
                                        name="linkedin"
                                        value={profile.linkedin}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.linkedin || "Not provided"}
                                    </p>
                                )}
                            </div>


                            <div className="input-group">
                                <label>Portfolio</label>

                                {isEditing ? (
                                    <input
                                        type="url"
                                        name="portfolio"
                                        value={profile.portfolio}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="view-value">
                                        {profile.portfolio || "Not provided"}
                                    </p>
                                )}
                            </div>

                        </div>

                    </div>


                    {/* RESUME */}

                    <div className="profile-section">

                       <label><b style={{fontSize:'20px',marginBottom:'10px'}}>Resume</b> <span className="required">*</span></label>

                        {isEditing ? (

                            <div className="resume-upload">

                                <label className="resume-label">

                                    <span className="resume-icon">
                                        📄
                                    </span>

                                    <span>
                                        {profile.resumeName
                                            ? profile.resumeName
                                            : "Upload your resume"}
                                    </span>

                                    <small>
                                        PDF only
                                    </small>

                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleResumeUpload}
                                    />

                                </label>

                            </div>

                        ) : (

                            <div className="resume-view">

                                <span>📄</span>

                                <strong>
                                    {profile.resumeName || "No resume uploaded"}
                                </strong>

                                {profile.resume && (
                                    <a
                                        href={profile.resume}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Resume
                                    </a>
                                )}

                            </div>

                        )}

                    </div>


                    {/* ACTION BUTTONS */}

                    {isEditing && (

                        <div className="profile-actions">

                            <button
                                type="submit"
                                className="create-profile-button"
                            >
                                Save Profile
                            </button>

                            {localStorage.getItem(
                                "careerBridgeCandidateProfile"
                            ) && (

                                <button
                                    type="button"
                                    className="cancel-button"
                                    onClick={() => {
                                        const savedProfile =
                                            localStorage.getItem(
                                                "careerBridgeCandidateProfile"
                                            );

                                        setProfile(
                                            JSON.parse(savedProfile)
                                        );

                                        setIsEditing(false);
                                    }}
                                >
                                    Cancel
                                </button>

                            )}

                        </div>

                    )}

                </form>

            </div>

        </div>
        </>
    );
};

export default CandidateProfile;

