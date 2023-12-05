import { CoursesDisplay } from "../components/course/CoursesDisplay";
import { RightNavbar } from "../components/layout/RightNavbar";
import { useEffect, useRef, useState } from "react";
import { TopNavbar } from "../components/layout/TopNavbar";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Home = (props) => {
  const courseListing = useRef();
  const [courses, setCourses] = useState([]);
  const scrollHandler = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    axios
      .get("/api/courses/")
      .then((response) => {
        if (response.status === 200) {
          // console.log(response.data);

          setCourses(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching course data :(", error);
      });
  }, []);

  return (
    <>
      <TopNavbar navs={["Home", "Login", "Admin"]} />
      <header className="App-header">
        <div className="textbox rows row-1">
          <span>Software Development</span>
        </div>
        <div className="textbox rows row-2">
          Gain the skills you need to create the latest computer, mobile, and
          gaming applications. Prepare to transform your ideas into reality all
          while developing your problem-solving skills.
        </div>
        <div className="rows row-3">
          <button
            className="button-1"
            onClick={() => scrollHandler(courseListing)}
          >
            All Offerings
          </button>
          <NavLink to="student">
            <button className="button-2">Apply Now</button>
          </NavLink>
        </div>
      </header>

      <div className="homePageRow">
        <div ref={courseListing} className="col col-1">
          <CoursesDisplay
            title="Course Listing"
            subtitle="Below are terms' courses."
            courses={courses}
            emptyMsg="No results have been found."
          />
        </div>
        <div className="col col-2">
          <RightNavbar />
        </div>
      </div>
    </>
  );
};
