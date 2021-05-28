export default function EditorTab({
  currentEditor,
  editor,
  className,
  onEditorChange,
  onEditorDelete,
}) {
  return (
    <div
      className={`editorTab${
        currentEditor !== editor ? " notSelectedEditorTab" : ""
      } ${className}`}
      onClick={() => {
        onEditorChange(editor);
      }}
    >
      {editor}.
      {(editor === "Home" && "md") ||
        (editor === "AboutMe" && "json") ||
        (editor === "Projects" && "yaml") ||
        (editor === "Skills" && "css") ||
        (editor === "Contact" && "xml")}
      {editor !== "Home" && (
        <i
          onClick={() => {
            onEditorDelete(editor);
          }}
          className="closeButton fas fa-times"
        ></i>
      )}
    </div>
  );
}
