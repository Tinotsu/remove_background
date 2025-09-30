export default function Input() {
  return (
    <div className="p-2 flex flex-col gap-2 card bg-primary shadow-xl">
      <input type="file" className="file-input"></input>
      <p className="text-center text-xl font-bold">or</p>
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
        />
      </label>
      <p className="validator-hint">Must be valid URL</p>
    </div>
  );
}
