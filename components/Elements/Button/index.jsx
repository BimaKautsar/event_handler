const Button = (props) => {
  const { children = "Apaan Tuhh !", classname = "hover:bg-yellow-500" ,onclick} = props;
  return (
    <button
      className={`bg-blue-500 ${classname} text-white font-bold py-2 px-4 rounded`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;