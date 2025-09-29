// import InputModal from "@components/common/InputModal";
// import useUserStore from "@store/useUserStore";
// import { LogIn, Mail } from "lucide-react";
// import type { Field } from "types/Field";

// type Props = {};

// function LoginModal({}: Props) {
//   const { error, loading } = useUserStore();

//   const fields: Field[] = [
//     {
//       name: "email",
//       title: "Email",
//       type: "email",
//       placeholder: "you@example.com",
//       Icon: Mail,
//       required: true,
//       invalidHint: "Email is required",
//     },
//     {
//       name: "password",
//       title: "Password",
//       type: "password",
//       placeholder: "••••••••",
//       required: true,
//       invalidHint: "Password is required",
//     }, // type assertion to satisfy optional `type` in InputModal
//   ];

//   return (
//     <InputModal
//       id="login-modal"
//       title="Login"
//       message="Please enter your credentials"
//       Icon={LogIn}
//       fields={fields}
//       confirmLabel="Login"
//       error={error}
//       loading={loading}
//       onConfirm={(data) => {
//         // data.email and data.password available
//         // wire auth API call here
//         console.log("login payload:", data);
//       }}
//     />
//   );
// }

// export default LoginModal;
