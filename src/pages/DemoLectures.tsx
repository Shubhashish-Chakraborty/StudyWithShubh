import { DemoLectureBox } from "../components/ui/DemoLectureBox";

export const DemoLectures = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-8 px-4">
            <h1 className="text-3xl font-bold mb-6 text-cyan-400 text-center">
                Demo Lectures
            </h1>
            <div className="flex justify-center flex-wrap gap-4">
                <DemoLectureBox 
                    notesPdfUrl="https://drive.google.com/file/d/1XVlMoz-BfXrB_xoTRAE_aOjSEK3-GBKr/view?usp=drive_link" 
                    title="Computer Science || python basics, conditional statements, Loops in Python, ForLoop, question practice" 
                    videoDriveUrl="https://drive.google.com/file/d/1q6lRU48zNtMYA05deWeiynG4XnP7LSP_/preview" 
                />
                <DemoLectureBox 
                    title="All you Need Know to Get Started with Git & Github:" 
                    videoDriveUrl="https://drive.google.com/file/d/15k11srcAQMlIlBvyqbEA2GViX8PwZ69W/preview" 
                />
                <DemoLectureBox 
                    title="Informatics Practices || Class-11th || Lecture-1: (1st September 2024)" 
                    videoDriveUrl="https://drive.google.com/file/d/1dTLRRLJu2QH_xy5XIWmg_iX_JZqkwbSn/preview" 
                />
                <DemoLectureBox 
                    title="Informatics Practices || Class-11th || Lecture-2: (7th September 2024)" 
                    videoDriveUrl="https://drive.google.com/file/d/1vGHhAwnKZ60TOlDlq3NIiDIs9xsdKdgd/preview" 
                />
                <DemoLectureBox 
                    title="Decimal Division Cases: || Class-11th || Computer Science:" 
                    videoDriveUrl="https://drive.google.com/file/d/1HOeMjVsZ79-9TMLXxQA_TLZ_sqJZSZjq/preview" 
                />
                <DemoLectureBox 
                    title="Python-Math Expressions: || Class-11th || Computer Science:" 
                    videoDriveUrl="https://drive.google.com/file/d/1NCD1jC_ofXvmeIZyidYvXNXpK1PTN7xB/preview" 
                />
                <DemoLectureBox 
                    title="Basics of Loops-For,While & Some Questions: || Class-11th || Computer Science:" 
                    videoDriveUrl="https://drive.google.com/file/d/12IBSOybGCFy56g_-_fu2mxOU_KirQECh/preview" 
                />
                <DemoLectureBox 
                    title="Short Demo for Computer Science Students" 
                    videoDriveUrl="https://drive.google.com/file/d/1KC0Mijq9LKxgsgXhnY7BXnLcwaVMb2Ko/preview" 
                />
                <DemoLectureBox 
                    title="Download & Install MySQL on Windows" 
                    videoDriveUrl="https://drive.google.com/file/d/19Xh04gThc_ZEdKy_Up8SLc43QxOpxc7w/preview" 
                />
            </div>
        </div>
    );
};
