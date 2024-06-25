import { Box, Drawer, List, Typography } from "@mui/material";
import { useCallback, useEffect } from "react";
import chaptersStudentService from "services/chaptersStudentService";
import "./course-drawer.scss";
import DrawerChapterItem from "./DrawerChapterItem";

const CourseDrawer = ({
  isVisible,
  handleDrawerToggle,
  courseId,
  currentChapterId,
  chapters,
  setChapters,
}) => {
  const loadCourseLessons = useCallback(async () => {
    const courseLessons = await chaptersStudentService.getAllByCourseId(
      courseId
    );
    if (courseLessons?.data) {
      console.log("courseLessons: ", courseLessons?.data);
      setChapters(courseLessons?.data);
    }
  }, [courseId, setChapters]);

  useEffect(() => {
    loadCourseLessons();
  }, [loadCourseLessons]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Программа курса
      </Typography>
      <List>
        {chapters &&
          chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="drawer-chapter-list-item"
              sx={{ cursor: "pointer", paddingTop: 0, paddingBottom: 0 }}
            >
              <DrawerChapterItem
                chapter={chapter}
                currentChapterId={currentChapterId}
              />
            </div>
          ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      ModalProps={{
        keepMounted: true,
      }}
      open={isVisible}
      onClose={handleDrawerToggle}
      classes={{ paper: "drawer-course-paper" }}
    >
      {drawer}
    </Drawer>
  );
};

export default CourseDrawer;
