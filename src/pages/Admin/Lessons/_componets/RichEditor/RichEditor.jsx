import { CKEditor } from "ckeditor4-react";
import "./editor.scss";

const RichEditor = ({ setValue, value }) => {
  return (
    <CKEditor
      initData={value}
      onChange={(evt) => {
        console.log();
        const newValue = evt.editor.getData();
        setValue("text", newValue);
      }}
    />
  );
};

export default RichEditor;
