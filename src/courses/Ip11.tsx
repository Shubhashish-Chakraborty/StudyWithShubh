import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Ip11 = () => {
    const [course, setCourse] = useState<any>(null);
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect to login page if not logged in
            return;
        }

        // Fetch course details
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/courses/ip11`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCourse(response.data);
            } catch (err) {
                setError("Failed to fetch course details.");
            }
        };

        fetchCourse();
    }, [navigate]);

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (!course) {
        return <div className="text-white text-center">Loading...</div>;
    }

    return (
        <div className="my-12 bg-custom-1 flex items-center justify-center px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-3xl">
                {/* <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1> */}
                <p className="text-white mb-6">{course.description}</p>

                <div className="space-y-4">
                    {course.lectures.map((lecture: any, index: number) => (
                        <div key={index} className="bg-gray-700 p-4 rounded-md">
                            <h3 className="text-xl text-white">{lecture.title}</h3>
                            <a
                                href={lecture.videoUrl}
                                className="text-blue-400 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Watch Lecture
                            </a>
                            <br />
                            <button onClick={() => {window.open(lecture.notesPdf)}} className="bg-blue-500 text-white mt-2 py-2 px-4 rounded-md">
                                Download Notes
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
