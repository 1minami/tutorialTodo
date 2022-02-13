import "./styles.css";

export default function Modal({show}) {
  if (show) {
    const [show, setShow] = useState(true)
    return (
      <div id="overlay">
        <div id="content">
          <p>これがモーダルウィンドウです。</p>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      </div >
    )
  } else {
    return null;
  }
}