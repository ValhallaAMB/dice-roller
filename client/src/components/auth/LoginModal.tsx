import InputModal from "@components/common/InputModal";
import { Mail } from "lucide-react";

type Props = {};

function LoginModal({}: Props) {
  const fields = [
    {
      title: "Email",
      type: "email",
      placeholder: "amazing@email.com",
      Icon: Mail,
      required: true,
      invalidHint: "Email is required",
    },
    {
      title: "Password",
      type: "password",
      placeholder: "••••••••",
      required: true,
      invalidHint: "Password is required",
    },
  ];

  return (
    <InputModal
      id="login-modal"
      title="Login"
      message="Please enter your credentials"
      fields={fields}
      confirmLabel="Login"
      onConfirm={() => {
        /* ...existing on-submit logic (call auth API) can be wired here... */
      }}
    />
  );
}

export default LoginModal;
