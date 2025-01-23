export const OtherContent = () => {
    return (
        <div className="bg-custom-3 text-white min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold animate-bounce">
                        Welcome to Tech Related Helps!
                    </h1>
                    <p className="text-lg md:text-xl mt-4">
                        By Shubhashish Chakraborty!
                    </p>
                </div>

                {/* Video Section */}
                <div className="mb-8">
                    <div className="text-2xl md:text-4xl font-bold text-blue-300">
                        video1
                    </div>
                    <iframe
                        className="w-full h-64 md:h-96 rounded-md shadow-lg"
                        src="https://drive.google.com/file/d/1PwA8-bUfwh258s7yEunE1WmaiJh8H9XT/preview"
                        frameBorder="0"
                        allow="autoplay"
                        allowFullScreen
                    />
                </div>

                
            </div>
        </div>
    );
};
