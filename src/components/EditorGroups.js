import EditorTab from "./EditorTab";
export default function EditorGroups({
  lightMode,
  openEditors,
  onEditorDelete,
  currentEditor,
  onEditorChange,
}) {
  return (
    <div id="EditorGroups" className={`${lightMode ? "light" : ""}`}>
      {openEditors.map((editor, index) => (
        <EditorTab
          key={index}
          onEditorDelete={onEditorDelete}
          editor={editor}
          currentEditor={currentEditor}
          onEditorChange={onEditorChange}
          className={`${lightMode ? "light" : ""}`}
        />
      ))}
    </div>
  );
}
