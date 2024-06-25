import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import './editor.scss';

const AppEditor = ({ setValue, value }) => {
  return (
    <CKEditor
      style={{height: 500}}
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });

        setValue("text", data);
      }}
    />
  );
};

export default AppEditor;
