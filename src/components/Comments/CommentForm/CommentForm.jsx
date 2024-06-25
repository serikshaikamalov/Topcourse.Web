import { Button } from "components/Button/Button";
import { useForm } from "react-hook-form";

export const CommentForm = ({ onSubmit, user }) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { isValid },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const beforeSubmit = (formValue) => {
    if (!user) {
      return alert("Комментария қалдыру үшін тіркелу керек!");
    }
    if (formValue.text) {
      setValue("text", "");
      onSubmit(formValue);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(beforeSubmit)}>
        <textarea
          style={{ border: "1px solid #ddd" }}
          name="text"
          rows={5}
          className="w-100 p-8 border-2"
          {...register("text", {
            required: true,
            minLength: 3,
          })}
        ></textarea>
        <div className="m-l-auto w-100 m-t-8">
          <Button type="submit" disabled={!isValid}>
            Коммент қалдыру
          </Button>
        </div>
      </form>
    </div>
  );
};
