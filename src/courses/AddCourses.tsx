import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AddCourses = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        // Redirect if no token or if the role is not 'admin'
        if (!token) {
            navigate("/login");
            return;
        }
    }, [navigate]);

    return (
        <div className="text-yellow-200">
            Add the course!! in here
        </div>
    );
}
