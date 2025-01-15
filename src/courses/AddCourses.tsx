import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const AddCourses = () => {
    const navigate = useNavigate();

    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const lectureTitleRef = useRef<HTMLInputElement>(null);
    const videoURLRef = useRef<HTMLInputElement>(null);
    const notesURLRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
    }, [navigate]);

    const handleAddCourse = async () => {
        const title = titleRef.current?.value;
        const description = descriptionRef.current?.value;
        const lectureTitle = lectureTitleRef.current?.value;
        const videoURL = videoURLRef.current?.value;
        const notesURL = notesURLRef.current?.value;

        if (!title || !lectureTitle || !videoURL) {
            alert("Please fill in all required fields.");
            return;
        }

        const courseData = {
            title,
            description,
            lectures: [
                {
                    title: lectureTitle,
                    videoURL,
                    notesURL
                }
            ]
        };

        try {
            const token = localStorage.getItem("token");
            await axios.post(`${BACKEND_URL}/api/courses`, courseData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert("Course added successfully!");
        } catch (error) {
            console.error("Error adding course:", error);
            alert("Failed to add course.");
        }
    };

    const handleUpdateCourse = async () => {
        const title = titleRef.current?.value;
        const lectureTitle = lectureTitleRef.current?.value;
        const videoURL = videoURLRef.current?.value;
        const notesURL = notesURLRef.current?.value;

        if (!title || !lectureTitle || !videoURL) {
            alert("Please fill in all required fields.");
            return;
        }

        const newLecture = {
            title: lectureTitle,
            videoURL: videoURL,
            notesURL: notesURL
        };

        try {
            const token = localStorage.getItem("token");
            await axios.patch(`${BACKEND_URL}/api/courses/update`, {
                title,
                newLecture
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert("Lecture updated successfully!");
        } catch (error) {
            console.error("Error updating course:", error);
            alert("Failed to update course.");
        }
    };

    return (
        <div className="text-white">
            <h1 className="text-xl text-emerald-300 md:text-4xl mb-10 text-center animate-bounce">Add Course Content!</h1>

            <div className="space-y-4">
                <Input type="text" placeholder="Course Title (ip11 , cs11....)" ref={titleRef} />
                <Input type="text" placeholder="Course Description:" ref={descriptionRef} />

                <h1 className="text-center font-bold text-xl md:text-2xl">Lectures:</h1>

                <Input type="text" placeholder="Lecture Title:" ref={lectureTitleRef} />
                <Input type="text" placeholder="Video URL:" ref={videoURLRef} />
                <Input type="text" placeholder="Notes URL:" ref={notesURLRef} />

                <div className="md:flex md:flex-row items-center flex flex-col justify-center gap-4">
                    <Button onClick={handleAddCourse} variant="primary" text="Add Content" />
                    <Button onClick={handleUpdateCourse} variant="secondary" text="Update Content" />
                </div>
            </div>
        </div>
    );
}
