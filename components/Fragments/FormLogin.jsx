import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = () => {
    console.log("login");
  };
    return (
      <form action="">
        <InputForm
          label="Email"
          placeholder="Example@gmail.com"
          type="email"
          name="email"
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="********"
        />
        <Button classname="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onclick={handleLogin}>
          Login
        </Button>
      </form>
    );
};

export default FormLogin;