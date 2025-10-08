export default function SignIn() {
  return (
    <>
      <h3>Login</h3>
      <input
        className="input validator"
        type="email"
        required
        placeholder="mail@site.com"
      />
      <div className="validator-hint">Enter valid email address</div>

      <input
        className="input validator"
        type="password"
        required
        placeholder="password"
      />
      <div className="validator-hint">Wrong password</div>
    </>
  );
}
