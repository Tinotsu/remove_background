export default function Output({ image }) {
  return (
    <div className="w-full card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body bg-base-300 rounded-b-2xl">
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Download</button>
        </div>
      </div>
    </div>
  );
}
