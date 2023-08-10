export default function Button({
  text,
  variant = "",
  icon,
  onClick = () => null,
  size = "",
}) {
  return (
    <>
      <button
        type="button"
        className={`btn ${variant} ${size}`}
        onClick={() => onClick()}
      >
        {text}
        {icon && <i className={icon}></i>}
      </button>
    </>
  );
}
