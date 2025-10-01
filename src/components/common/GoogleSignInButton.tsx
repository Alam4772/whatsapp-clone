import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

interface GoogleSignInButtonProps {
  onSuccess: (tokenResponse: any) => void;
  onError?: () => void;
  text?: string;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  onSuccess,
  onError,
  text = "Sign in with Google",
}) => {
  const login = useGoogleLogin({
    onSuccess,
    onError,
  });

  return (
    <button
      onClick={() => login()}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        cursor: "pointer",
        background: "white",
        fontSize: "20px",
        fontWeight: 600,
      }}
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google logo"
        style={{ width: "30px", height: "30px" }}
      />
      <span>{text}</span>
    </button>
  );
};

export default GoogleSignInButton;
