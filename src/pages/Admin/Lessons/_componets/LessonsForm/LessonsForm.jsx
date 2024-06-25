import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import TextEditor from "components/TextEditor/TextEditor";
import "./form.scss";

/**
 *
 * @param data - for data for autofill
 * @returns
 */
const AdminLessonForm = ({ onSubmit, data }) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      order: data?.order,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <Box sx={{ marginBottom: "20px" }}>
        {/* Name */}
        <div className="form-input">
          <div className="form-input__label">
            <label htmlFor="name">Наименование урока</label>
          </div>
          <div className="form-input__input">
            <input
              name="name"
              id="name"
              {...register("name")}
              defaultValue={data?.name}
              className="w-100"
            />
          </div>
        </div>
        {/* Краткое описание */}
        <div className="form-input">
          <div className="form-input__label">
            <label htmlFor="subTitle">Краткое описание</label>
          </div>
          <div className="form-input__input">
            <textarea
              name="subTitle"
              id="subTitle"
              {...register("subTitle")}
              defaultValue={data?.subTitle}
              rows={3}
              className="w-100 border-2"
            />
          </div>
        </div>
      </Box>
      <div>
        <input
          type="checkbox"
          name="active"
          id="active"
          {...register("active")}
          defaultChecked={data ? data.active : true}
          onChange={(e) => {
            console.log("Active:", e);
          }}
        />
        <label className="m-l-4" htmlFor="active">
          Active
        </label>
      </div>
      {/* Stop lesson */}
      <div>
        <input
          type="checkbox"
          name="isStop"
          id="isStop"
          {...register("isStop")}
          defaultChecked={data ? data.isStop : false}
        />
        <label className="m-l-4" htmlFor="isStop">
          Стоп урок
        </label>
      </div>
      {/* Text */}
      <div>
        <TextEditor
          value={data?.text || ""}
          onChange={(v) => setValue("text", v)}
        ></TextEditor>
      </div>
      {/* Files */}
      <div>
        <input type="file" id="files" {...register("file")} />
      </div>
      <Box sx={{ marginBottom: "20px" }}></Box>
      <Button type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
};

export default AdminLessonForm;
