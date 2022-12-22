import { useState } from "react";
import { React } from "react";
import './index.css'

function App() {

  const [data, setForm] = useState([{
    name: "",
    email: "",
    company: ""
  }])

  const handleCheck = (index, e, selected) => {
    console.log(index, e.target.value, selected);
    let temp = [...data];
    temp[index][selected] = e.target.value;
    setForm(temp);
  }

  const handleNewRow = () => {
    setForm([...data, {
      name: "",
      email: "",
      company: "",
    }])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setForm([{
      name: "",
      email: "",
      company: ""
    }])
  }

  return (
    <section>
      <h3>Experience Section</h3>
      <form onSubmit={handleSubmit}>
        {
          data.map((details, index) => (
            <>
              <section key={index}>
                <div>
                  <label htmlFor="">Name: </label>
                  <input type="text" onChange={(e) => handleCheck(index, e, "name")} value={details?.name} />
                </div>
                <div>
                  <label htmlFor="">Email: </label>
                  <input type="text" onChange={(e) => handleCheck(index, e, "email")} value={details?.email} />
                </div>
                <div>
                  <label htmlFor="">Company</label>
                  <input type="text" onChange={(e) => handleCheck(index, e, "company")} value={details?.company} />
                </div>
              </section>
              {
                index !== data.length - 1 ? <div className="horizontal"></div> : ''
              }
            </>
          ))
        }
        <span onClick={handleNewRow}>Add new Postion</span>
        <br />
        <button>Submit</button>
      </form>
    </section >
  );

}

export default App;
