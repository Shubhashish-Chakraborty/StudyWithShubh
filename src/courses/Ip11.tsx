import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Button } from "../components/ui/Button";
import { NotFound } from "../icons/others/NotFound";
import { File } from "../icons/others/File";
import { Play } from "../icons/others/Play";

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
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-full">
                {/* <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1> */}
                <p className="text-white mb-6 text-center animate-bounce text-2xl md:text-3xl">{course.description}</p>

                <div className="space-y-4">
                    {course.lectures.map((lecture: any, index: number) => (
                        <div key={index} className="bg-gray-700 p-4 text-center md:flex justify-between items-center rounded-md">
                            <h3 className="text-xl text-white">{lecture.title}</h3>
                            
                            <div className="flex md:flex-row items-center flex-col justify-center gap-4">

                                <Button variant="primary" text="Lecture" endIcon={<Play/>} onClick={() => {window.open(lecture.videoUrl)}}/>
                                
                                {
                                lecture.notesPdf != "NA"
                                    ?
                                    <Button variant="primary" text="Notes" endIcon={<File/>} onClick={() => {window.open(lecture.notesPdf)}}/>
                                    :
                                    <Button variant="notAllowed" text="Notes" endIcon={<NotFound/>}/>
                                }
                        
                            </div>
                    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
