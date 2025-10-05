export default function Input({ onSelect }) {
  return (
    <div className="w-fit h-fit mr-8 self-end p-6 flex flex-col gap-2 card bg-secondary shadow-xl">
      <form method="post" className="flex gap-2">
        <input
          type="file"
          className="file-input"
          onChange={(e) => onSelect(URL.createObjectURL(e.target.files[0]))}
        ></input>

        <input
          type="submit"
          value="try it"
          className="btn btn-active self-end"
        />
      </form>
      <p className="text-center text-xl font-bold text-primary">or</p>
      <form method="post" className="flex gap-2">
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </g>
          </svg>
          <input
            type="url"
            required
            placeholder="https://"
            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
            title="Must be valid URL"
            onChange={(e) => onSelect(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value="try it"
          className="btn btn-active self-end"
        />
      </form>
      <p className="validator-hint">Must be valid URL</p>
      <div className="flex justify-between">
        <h2 className="card-title text-primary">Try it with your photo !</h2>
      </div>
    </div>
  );
}
