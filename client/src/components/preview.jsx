export default function Preview() {
  return (
    <figure className="diff aspect-16/9 rounded-2xl" tabIndex={0}>
      <div className="diff-item-1" role="img" tabIndex={0}>
        <img alt="daisy" src="http://127.0.0.1:8000/img_w_bg" />
      </div>
      <div className="diff-item-2" role="img">
        <img alt="daisy" src="http://127.0.0.1:8000/img_wo_bg" />
      </div>
      <div className="diff-resizer"></div>
    </figure>
  );
}
