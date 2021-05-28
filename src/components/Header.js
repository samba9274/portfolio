export default function Header({ lightMode, setCurrentEditor, openEditors }) {
  return (
    <header id="MenuBar" className={`${lightMode ? "light" : ""}`}>
      <i
        onClick={() => {
          setCurrentEditor("Home");
          if (!openEditors.includes("Home")) openEditors.push("Home");
        }}
        id="Logo"
        className="fas fa-code"
      ></i>
      <ul>
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Run</li>
        <li>Terminal</li>
        <li>Help</li>
      </ul>
    </header>
  );
}
