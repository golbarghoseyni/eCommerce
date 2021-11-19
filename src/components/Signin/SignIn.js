const SignIn = () => {
  return (
    <div align="center" margin-top="100px">
      <br />
      <br />
      <br />
      <form /*action="" onSubmit={handleLogin} id="sign-up-form"*/>
        <h1>Login to your account </h1>
        <br />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          /*onChange={(e) => setEmail(e.target.value)}
        value={email}*/
        />
        <div className="email error"></div>
        <br />
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          /*onChange={(e) => setPassword(e.target.value)}
        value={password}*/
        />
        <div className="password error"></div>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
export default SignIn;
