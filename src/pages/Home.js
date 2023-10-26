import { CoursesDisplay } from '../components/course/CoursesDisplay';
import { allCourses0 } from '../data/course'
import { RightNavbar } from '../components/layout/RightNavbar';
import { useState } from 'react';
import { TopNavbar } from '../components/layout/TopNavbar';

export const Home = () => {
    const [allCourses, setAllCourses] = useState(allCourses0)

    const handleClick = (e) => {
        const term = e.target.name
        const courses = allCourses.filter(c => c.term == term)
        setAllCourses(courses)
    }
    
    return (
        <>
            <TopNavbar navs={["Home", "Login", "Admin"]}/>
            <header className="App-header">
                <div className="textbox rows row-1">
                    <span>Software Development</span>
                </div>
                <div className="textbox rows row-2">
                    Gain the skills you need to create the latest computer, mobile, and gaming applications. Prepare to transform your ideas into reality all while developing your problem-solving skills.
                </div>
                <div className="rows row-3">
                    <button className="button-1">All Offerings</button>
                    <button className="button-2">Apply Now</button>
                </div>
            </header>

            <div className="homePageRow">
                <div className="col col-1">
                    <CoursesDisplay title="Course Listing" subtitle="Below are terms' courses." courses={allCourses} />
                </div>
                <div className="col col-2">
                    <RightNavbar />
                </div>
            </div>
        </>
    )
}