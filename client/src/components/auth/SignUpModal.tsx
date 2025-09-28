import InputModal from "@components/common/InputModal";
import { FileUser, Mail } from "lucide-react";

type Props = {};

function SignUpModal({}: Props) {
  const fields = [
    {
      title: "Username",
      type: "text",
      placeholder: "amazing username",
      Icon: FileUser,
      required: true,
      invalidHint: "Username is required",
    },
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
      placeholder: "Choose a secure password",
      required: true,
      invalidHint: "Password is required",
    },
  ];

  return (
    <InputModal
      id="signup-modal"
      title="Sign Up"
      message="Please enter your details"
      fields={fields}
      confirmLabel="Sign Up"
      onConfirm={() => {
        /* ...existing sign-up logic can be wired here... */
      }}
    />
  );
}

export default SignUpModal;
