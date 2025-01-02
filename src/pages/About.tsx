export const About = () => {
    return (
        <div className="bg-custom-3 text-white min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Welcome to StudyWithShubh!
                    </h1>
                    <p className="text-lg md:text-xl mt-4">
                        Get detailed information in this video!
                    </p>
                </div>

                {/* Video Section */}
                <div className="mb-8">
                    <iframe
                        className="w-full h-64 md:h-96 rounded-md shadow-lg"
                        src="https://drive.google.com/file/d/1UuwminwI4Bry_Cf_Qin7PjRFYusqSJlc/preview"
                        frameBorder="0"
                        allow="autoplay"
                        allowFullScreen
                    />
                </div>

                {/* About Content Section */}
                <div className="text-lg md:text-xl space-y-6">
                    <p>
                        🌟 <strong>Introducing StudyWithShubh 🌟</strong><br />
                        <a href="https://studywithshubh.tech" className="text-blue-400 hover:underline">
                            studywithshubh.tech
                        </a>
                    </p>

                    <p>
                        What started as a simple curiosity and passion for technology has now grown into something truly meaningful. Through my journey of learning and exploring tech, I realized the joy of sharing knowledge and helping others. That’s when I decided to take the next step—launching <strong>studywithshubh.tech</strong>, a platform dedicated to tech learning.
                    </p>

                    <p>
                        🚀 <strong>About StudyWithShubh</strong><br />
                        SWS is not just a website; it's a community-driven tech learning platform where I serve as both tutor and enthusiast. With every lecture I teach and every doubt I help solve, my goal is to empower students to not just learn but truly understand and excel in tech.
                    </p>

                    <p>
                        ✨ <strong>Why This Initiative?</strong><br />
                        It started with me conducting live classes and assisting juniors, but over time, this evolved into a startup-like project. The website, built entirely out of my learning, showcases my passion for tech and my commitment to fostering growth in others.
                    </p>

                    <p>
                        💡 <strong>Join and Learn with Me</strong><br />
                        If you’re curious about tech or need help understanding it better, don’t hesitate! Visit StudyWithShubh, register, and become part of this growing community. Together, we’ll learn, grow!
                    </p>

                    <p>
                        🎥 <strong>Check Out the Intro Video for SWS</strong><br />
                        Head over to the homepage at StudyWithShubh (<a href="https://studywithshubh.tech" className="text-blue-400 hover:underline">studywithshubh.tech</a>) and watch the intro video to learn more about this initiative and how you can be part of it.
                    </p>

                    <p>
                        💡 <strong>Let’s Connect!</strong><br />
                        I’m eager to collaborate with fellow tech enthusiasts and professionals in the community. Together, let’s grow, learn, and expand this initiative to create a larger impact in the tech world.
                    </p>
                </div>
            </div>
        </div>
    );
};
