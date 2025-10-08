export default function SignUp() {
  return (
    <>
      <h3>Create an account</h3>
      <input
        className="input validator"
        type="email"
        required
        placeholder="mail@site.com"
      />
      <div className="validator-hint">Enter valid email address</div>
      <input
        type="password"
        className="input validator"
        required
        placeholder="Password"
        //minlength="8"
        //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
      />
      <p className="validator-hint">
        Must be more than 8 characters, including
        <br />
        At least one number
        <br />
        At least one lowercase letter
        <br />
        At least one uppercase letter
      </p>
    </>
  );
}
