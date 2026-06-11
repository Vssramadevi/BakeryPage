import "./DevicePreview.css";

function DevicePreview({ setDeviceWidth }) {
  return (
    <div className="preview-buttons">

      <button onClick={() => setDeviceWidth("100%")}>
        🖥 Desktop
      </button>

      <button onClick={() => setDeviceWidth("1200px")}>
        💻 Laptop
      </button>

      <button onClick={() => setDeviceWidth("768px")}>
        📱 Tablet
      </button>

      <button onClick={() => setDeviceWidth("568px")}>
        📲 Mobile-L
      </button>

      <button onClick={() => setDeviceWidth("375px")}>
        📱 Mobile-P
      </button>

    </div>
  );
}

export default DevicePreview;