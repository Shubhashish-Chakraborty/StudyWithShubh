import { DemoLectureBox } from "../components/ui/DemoLectureBox"

export const DemoLectures = () => {
    return (
        <div className="flex justify-center flex-wrap">
            <DemoLectureBox notesPdfUrl="https://drive.google.com/file/d/1XVlMoz-BfXrB_xoTRAE_aOjSEK3-GBKr/view?usp=drive_link" title="Computer Science || python basics , conditional statements , Loops in Python , ForLoop , question practice" videoDriveUrl="https://drive.google.com/file/d/1q6lRU48zNtMYA05deWeiynG4XnP7LSP_/preview" />
            <DemoLectureBox title="Informatics Practices || Class-11th || Lecture-1: (1st September 2024)
" videoDriveUrl="https://drive.google.com/file/d/1dTLRRLJu2QH_xy5XIWmg_iX_JZqkwbSn/preview" />
            <DemoLectureBox title="Informatics Practices || Class-11th || Lecture-2: (7th September 2024)" videoDriveUrl="https://drive.google.com/file/d/1vGHhAwnKZ60TOlDlq3NIiDIs9xsdKdgd/preview" />
        </div>
    )
}