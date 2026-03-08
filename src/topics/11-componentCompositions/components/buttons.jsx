// Buttons component — reusable button with 4 variants
// variant  = "primary" | "danger" | "success" | "ghost"
// onClick  = function to run when clicked
// children = the button label text

function Buttons({ children, onClick, variant = "primary" }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Buttons;
