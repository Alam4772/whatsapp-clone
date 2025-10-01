import GoogleSignInButton from "../components/common/GoogleSignInButton";
import styles from "./../styles/pages/login.module.scss";
import logo from "./../assets/images/logo.png";
import { signIn } from "../services/authService";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const handleSubmit = async (accessToken: string) => {
    try {
      await signIn({ accessToken });
      window.location.href = "/"; // redirect after login
    } catch (err) {}
  };

  return (
    <div className={styles.main}>
      <div>
        <img src={logo} alt="" />
        <div style={{ marginTop: 15 }}>
          <GoogleSignInButton
            onSuccess={(tokenResponse) => {
              console.log("Google Token:", tokenResponse);
              handleSubmit(tokenResponse.access_token);
            }}
            onError={() => {
              console.log("Google Login Failed");
            }}
            text="Continue with Google"
          />
        </div>
      </div>
    </div>
  );
}
