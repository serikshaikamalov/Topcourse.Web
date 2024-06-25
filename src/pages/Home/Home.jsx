import React from "react";
import CourseBlock from "./components/CourseBlock/CourseBlock";
import CourseAbout from "./components/CourseAbout/CourseAbout";
import { ForWhom } from "./components/ForWhom/ForWhom";
import CourseStructure from "./components/CourseStructure/CourseStructure";
import CoursePrice from "./components/CoursePrice/CoursePrice";
import CourseResult from "./components/CourseResult/CourseResult";
import Salary from "./components/Salary/Salary";
import "./home.scss";
import Author from "./components/Author/Author";
import Certificate from "./components/Certificate/Certificate";
import { Dialog } from "@mui/material";
import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <CourseBlock openModal={openModal} />
      <CourseAbout />
      <Salary />
      <ForWhom />
      <CourseStructure />
      <CourseResult />
      <Author />
      <Certificate />
      <CoursePrice openModal={openModal} />
      <Dialog
        onClose={handleClose}
        open={isOpen}
        fullWidth={true}
        maxWidth={"md"}
      >
        <ContactForm onClose={handleClose}></ContactForm>
      </Dialog>
    </>
  );
};

export default Home;
