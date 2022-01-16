import useInputHook from "./input2";

function Input1() {
  const [fname, bindFname, resetFname] = useInputHook("none");
  const [lname, bindLname, resetLname] = useInputHook("none");

  console.log("in inptut 1 ", [fname, bindFname, resetFname]);

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hello ${fname}  ${lname}`);
    resetFname();
    resetLname();
  };

  return (
    <form onSubmit={submitHandler}>
      fname
      <input type="text" {...bindFname}></input>
      <br />
      lname
      <input type="text" {...bindLname}></input>
      <br />
      <button>submit</button>
    </form>
  );
}

export default Input1;
