export default function NavLink({
  to,
  openEditors,
  setCurrentEditor,
  className,
}) {
  return (
    <li>
      <i
        onClick={() => {
          setCurrentEditor(to);
          if (!openEditors.includes(to)) openEditors.push(to);
        }}
        className={`icon ${className}`}
      ></i>
    </li>
  );
}
