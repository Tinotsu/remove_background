import axios from "axios";
export default function Output({ image }) {
  async function sendImage() {
    console.log({ image });
    try {
      await axios.post("http://0.0.0.0:8000/img_client", { image });
      return "it works";
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="w-full card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body bg-base-300 rounded-b-2xl">
        <div className="card-actions justify-around">
          <button className="btn btn-primary" onClick={sendImage}>
            remove it
          </button>
          <button className="btn btn-primary">Download</button>
        </div>
      </div>
    </div>
  );
}
