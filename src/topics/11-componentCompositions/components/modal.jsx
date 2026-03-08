function Modal({ header, footer, children, onClose }) {
  return (
    // OVERLAY — covers entire screen, dims background
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(4px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.2s ease",
      }}
    >
      {/* BOX — stops click from closing when clicking inside */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#13131a",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          width: "460px",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
          animation: "slideUp 0.3s ease",
        }}
      >
        {/* HEADER — always pinned to top */}
        <div 
        style={{
          padding: "24px 28px",
          borderBottom: "1px solid rgba(60, 151, 236, 0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {header}
        </div>

        {/* BODY — main content, always in middle */}
        <div style={{ padding: "28px" }}>
          {children}
        </div>

        {/* FOOTER — always pinned to bottom */}
        <div 
        style={{
          padding: "20px 28px",
          borderTop: "1px solid rgba(228, 22, 22, 0.06)",
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
        }}>
          {footer}
        </div>
      </div>
    </div>
  );
}

export default Modal;