import React, {useState} from "react";

function App() {
  var [fullName, setFullName] = useState({
    fName:"",
    lName:""
  });

  function changeName(event){
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName(prevValue => {
      if (inputName === "fName"){
        return {
          fName: newValue,
          lNmae: prevValue.lName
        }
      }else if(inputName === "lName"){
        return {
          fName: prevValue.fName,
          lName: newValue
        }
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input
        onChange={changeName}
        name="fName"
        placeholder="First Name"
        value={fullName.fName}
        />
        <input
        onChange={changeName}
        name="lName"
        placeholder="Last Name"
        value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
