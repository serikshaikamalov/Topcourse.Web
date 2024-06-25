import { Button } from "@mui/material";
import { toFormData } from "helpers/formUtils";
import { useRef } from "react";
import usersService from "services/admin/usersService";

const AddBulk = () => {
  const fileRef = useRef();
  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log("onSubmit: ", fileRef.current.files);
      if (!fileRef.current || !fileRef.current?.files) {
        alert("Пожалуйста выберите csv файл");
        return;
      }

      const file = fileRef.current.files[0];
      const formedData = toFormData({ users: file });
      await usersService.bulkUsers(formedData);
      alert("Все студенты успешно загружены");
      setTimeout(() => {
        window.history.back();
      }, 1500);
    } catch (ex) {
      console.log("ex: ", ex);
      alert(ex?.message);
    }
  };

  return (
    <div>
      <h3 className="mb-4">
        Здесь вы можете загружать студентов через csv файл.
      </h3>
      <p className="mb-8">
        Пожалуйста скачайте{" "}
        <a
          href="https://firebasestorage.googleapis.com/v0/b/frontends-f1a04.appspot.com/o/csv%2Ftemplate.csv?alt=media"
          className="color-blue"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          данный файл
        </a>{" "}
        и добавьте своих студентов, после чего загрузите данный файл
      </p>
      <form encType="multipart/form-data" onSubmit={onSubmit}>
        <input type="file" accept=".csv" size="100000" ref={fileRef} />
        <Button variant="contained" type="submit">
          Загрузить
        </Button>
      </form>
    </div>
  );
};

export default AddBulk;
