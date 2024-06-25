import { Autocomplete, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import TextEditor from "components/TextEditor/TextEditor";
import inputTypeEnum from "enums/inputTypes";
import { toNativeDate } from "helpers/dateHelper";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import "./form.scss";

/**
 *
 * Supports: Text, Number, Select, Multiple Select, Checkbox, RichText, Date
 * @param data - for data for autofill
 * @returns
 */
const AppForm = ({ onSubmit, data, fields, formProps = {} }) => {
  const { register, handleSubmit, setValue, control } = useForm();

  const defaultValue = useCallback(
    (col) => {
      const selected = data?.[col.key];

      if (col.options && selected) {
        if (col.multiple) {
          // Multiple selection
          return col.options.filter((x) =>
            selected.map((s) => s.id).includes(x.id)
          );
        } else {
          // Single selection
          return col.options.find((x) => {
            if (typeof selected === "object") {
              return x.id === selected["id"];
            }
            return x.id === selected;
          });
        }
      }

      // When no default
      return Boolean(col.multiple) ? [] : "";
    },
    [data]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...formProps}>
      <Box sx={{ marginBottom: "20px" }}>
        {fields &&
          fields.map((f) => {
            const commonProps = {
              required: f.required === true,
            };

            if (!f.inputType || f.inputType === inputTypeEnum.text) {
              return (
                <div className="form-input" key={f.key}>
                  <div className="form-input__label">
                    <label htmlFor="name">{f.label}</label>
                  </div>
                  <div className="form-input__input">
                    <input
                      name="name"
                      id="name"
                      {...register(f.key)}
                      defaultValue={data?.[f.key] || f?.defaultValue}
                      className="w-100"
                      autoComplete="false"
                      {...commonProps}
                    />
                  </div>
                </div>
              );
            }
            if (f.inputType === inputTypeEnum.hidden) {
              return (
                <div className="form-input" key={f.key}>
                  <div className="form-input__input">
                    <input
                      type="hidden"
                      name={f.key}
                      id={f.key}
                      {...register(f.key)}
                      defaultValue={data?.[f.key] || f?.defaultValue}
                      autoComplete="false"
                    />
                  </div>
                </div>
              );
            }
            if (f.inputType === inputTypeEnum.select) {
              return (
                <div
                  className="form-input"
                  key={f.key}
                  data-key={f.key}
                  data-value={JSON.stringify(data?.[f.key])}
                  data-default-value={data?.[f.key]}
                >
                  <div className="form-input__label">
                    <label htmlFor="name">{f.label}</label>
                  </div>
                  <div className="form-input__input">
                    <Controller
                      control={control}
                      name={f.key}
                      defaultValue={defaultValue(f)}
                      render={({ field: { ref, onChange, ...field } }) => {
                        return (
                          <Autocomplete
                            {...field}
                            options={f?.options || []}
                            getOptionLabel={(option) => option.name || ""}
                            multiple={Boolean(f.multiple)}
                            defaultValue={defaultValue(f)}
                            onChange={(_, data) => {
                              onChange(data);
                            }}
                            renderInput={(params) => {
                              return <TextField {...params} {...commonProps} />;
                            }}
                          />
                        );
                      }}
                    ></Controller>

                    {/* <select
                      {...register(f.key)}
                      className="w-100"
                      multiple={f.multiple}
                      defaultValue={defaultValue(f)}
                    >
                      {f?.options?.map((o, index) => {
                        return (
                          <option key={index} value={o?.id}>
                            {o?.name}
                          </option>
                        );
                      })}
                    </select> */}
                  </div>
                </div>
              );
            }

            if (f.inputType === inputTypeEnum.checkbox) {
              return (
                <div className="form-input" key={f.key}>
                  <div className="form-input__label">
                    <input
                      type="checkbox"
                      name={f.key}
                      id={f.key}
                      {...register(f.key)}
                      defaultChecked={data?.[f.key]}
                    />
                    <label className="m-l-8" htmlFor={f.key}>
                      {f.label}
                    </label>
                  </div>
                </div>
              );
            }

            if (f.inputType === inputTypeEnum.richText) {
              return (
                <div className="form-input" key={f.key}>
                  <div className="form-input__label">
                    <label htmlFor="name">{f.label}</label>
                  </div>
                  <div className="form-input__input">
                    <TextEditor
                      value={data?.[f.key] || ""}
                      onChange={(v) => setValue(f.key, v)}
                    ></TextEditor>
                  </div>
                </div>
              );
            }
            if (f.inputType === inputTypeEnum.date) {
              return (
                <div className="form-input" key={f.key}>
                  <div className="form-input__label">
                    <label htmlFor={f.key}>{f.label}</label>
                  </div>
                  <div className="form-input__input">
                    <input
                      name={f.key}
                      id={f.key}
                      {...register(f.key)}
                      defaultValue={
                        data?.[f.key]
                          ? toNativeDate(new Date(data?.[f.key]))
                          : toNativeDate(new Date())
                      }
                      className="w-100"
                      autoComplete="false"
                      type="date"
                      readOnly={f.readOnly}
                      {...commonProps}
                    />
                  </div>
                </div>
              );
            }
            if (f.inputType === inputTypeEnum.file) {
              return (
                <div
                  key={f.key}
                  className="flex"
                  style={{ alignItems: "center" }}
                >
                  <div>
                    <label>{f.label}</label>
                    {data?.[f.key] ? (
                      <div
                        style={{ width: 100, height: 100, marginTop: "1rem" }}
                      >
                        <img src={data?.[f.key]} alt="" />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    {" "}
                    <input
                      type="file"
                      id={f.key}
                      {...register(f.key)}
                      onChange={(e) => {
                        const file = document.querySelector(`#${f.key}`)
                          .files[0];
                        const max = 5 * 1000 * 1000; // 5MB
                        console.log("File size is:", file.size / 1000000, 'MB');
                        if (file && file.size > max) {
                          alert(
                            "Вы не можете загружать большие файлы! Пожалуйста используйте файл маленького размера"
                          );
                        }
                      }}
                    />
                  </div>
                </div>
              );
            }
            return <></>;
          })}
      </Box>
      <Button type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
};

export default AppForm;
//
