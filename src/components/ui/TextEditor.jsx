import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor({ value, setValue }) {
  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
export default TextEditor;
