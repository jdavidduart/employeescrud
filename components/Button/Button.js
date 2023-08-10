export default function Button({
  text,
  variant = "",
  icon,
  onClick = () => null,
  size = "",
  id,
}) {
  return (
    <>
      <button
        id={id}
        type="button"
        className={`btn ${variant} ${size}`}
        onClick={(e) => onClick(e)}
      >
        {text}
        {icon && <i style={{ pointerEvents: "none" }} className={icon}></i>}
      </button>
    </>
  );
}
