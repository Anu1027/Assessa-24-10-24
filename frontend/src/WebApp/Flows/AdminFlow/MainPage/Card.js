import React from "react";
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaHeart } from "react-icons/fa";
import AeroImage from "../../../../assets-webapp/Aero-image.png";
import code from "../../../../assets-webapp/code.png";
import denside from "../../../../assets-webapp/denside.png";
import gradient from "../../../../assets-webapp/gradient.png";
import tech from "../../../../assets-webapp/tech.png";

const images = [AeroImage, code, denside, gradient, tech];

const getRandomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};

const JobCard = ({ searchTerm }) => {
  const jobData = [
    {
      jobTitle: "Data Science Intern",
      company: "Harber Inc",
      location: "439 Metz Field, Canada",
      type: "Remote",
      duration: "Internship • 3 months",
      salary: "30k per month",
      field: "Computer science engineering",
    },
    {
      jobTitle: "Software Engineer Intern",
      company: "Acme Corp",
      location: "123 Tech Lane, USA",
      type: "Remote",
      duration: "Internship • 6 months",
      salary: "35k per month",
      field: "Software Engineering",
    },
    {
      jobTitle: "Web Developer",
      company: "Techie Ltd",
      location: "789 Code Street, India",
      type: "Remote",
      duration: "Full-time • 12 months",
      salary: "45k per month",
      field: "Web Development",
    },
    {
      jobTitle: "UX/UI Designer",
      company: "Creative Co",
      location: "456 Design Blvd, UK",
      type: "Remote",
      duration: "Full-time • 24 months",
      salary: "50k per month",
      field: "Design",
    },
    {
      jobTitle: "Aerospace Engineering Intern",
      company: "Blue Origin",
      location: "Seattle, WA, USA",
      type: "On-site",
      duration: "Internship • 6 months",
      salary: "40k per month",
      field: "Aerospace Engineering",
    },
    {
      jobTitle: "Aeronautical Engineering Intern",
      company: "NASA",
      location: "Houston, TX, USA",
      type: "On-site",
      duration: "Internship • 4 months",
      salary: "45k per month",
      field: "Aeronautical Engineering",
    },
    {
      jobTitle: "Space Systems Engineering Intern",
      company: "SpaceX",
      location: "Hawthorne, CA, USA",
      type: "Remote",
      duration: "Internship • 3 months",
      salary: "50k per month",
      field: "Space Systems Engineering",
    },
    {
      jobTitle: "Aerospace Propulsion Intern",
      company: "Northrop Grumman",
      location: "Los Angeles, CA, USA",
      type: "On-site",
      duration: "Internship • 6 months",
      salary: "55k per month",
      field: "Aerospace Propulsion",
    },
  ];

  // Filter jobData based on searchTerm
  const filteredJobs = jobData.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, index) => (
          <div
            key={index}
            className="w-full max-w-sm p-4 border rounded-lg shadow-md"
          >
            <div className="flex items-start gap-4">
              <img
                src={getRandomImage()}
                alt="Company Logo"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-grow">
                <h5 className="text-lg font-medium">{job.jobTitle}</h5>
                <p className="text-sm text-gray-500">{job.company}</p>
                <p className="text-xs text-gray-400">5d ago</p>
              </div>
              <button className="text-gray-400 hover:text-black">
                <FaHeart />
              </button>
            </div>
            <div className="mt-4">
              <p className="flex items-center text-sm text-gray-500">
                <FaMapMarkerAlt className="mr-2" />
                {job.location} • {job.type}
              </p>
              <p className="flex items-center mt-2 text-sm text-gray-500">
                <FaClock className="mr-2" />
                {job.duration}
              </p>
              <p className="flex items-center mt-2 text-sm text-gray-500">
                <FaDollarSign className="mr-2" />
                {job.salary}
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 text-xs text-gray-500 bg-gray-200 rounded-full">
                {job.field}
              </span>
              <span className="px-3 py-1 text-xs text-gray-500 bg-gray-200 rounded-full">
                +2
              </span>
            </div>
            <div className="mt-4">
              <a href="#" className="text-purple-600 text-sm font-medium">
                View details
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No jobs found</p>
      )}
    </div>
  );
};

export default JobCard;
