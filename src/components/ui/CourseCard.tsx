import { Redirect } from "../../icons/others/Redirect";
import { Button } from "./Button";

export const CourseCard = ({ thumbnail, title }: { thumbnail: string; title: string; }) => {
    return (
        <div className="flex flex-col hover:translate-y-2 bg-blue-400 shadow-lg rounded-lg overflow-hidden w-full sm:w-64 md:w-72 lg:w-80 mx-4 my-4 hover:shadow-xl transition-all duration-300 cursor-pointer">
            {/* Thumbnail Section */}
            <div className="w-full h-40 sm:h-48 md:h-56">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Title Section */}
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <div className="flex justify-center">
                <Button variant="secondary" text="Learn" endIcon={<Redirect/>}/>
            </div>
        </div>
    );
};
