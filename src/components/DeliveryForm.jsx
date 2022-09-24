import React, { useState } from "react";

function DeliveryForm(props) {
  const [state, setState] = useState({
    deliveryName: " ",
    deliveryLastName: " ",
    deliveryAddress: " ",
    deliveryPhone: "",
    deliveryCollege: " ",
    deliveryBranch: " ",
    deliveryUsn: " ",
    deliveryYear: " ",
  });

  const onchange = (e) => {
    const { name, value } = e.target;
    setState((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addToListCallback(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>
          <u>Student Registration</u>
        </h1>
        <input
          type="text"
          name="deliveryName"
          placeholder=" enter First Name"
          autoComplete="{false}"
          onChange={onchange}
        />
        <input
          type="text"
          name="deliveryLastname"
          placeholder="enter Last Name"
          autoComplete="{false}"
          onChange={onchange}
        />
        <input
          type="text"
          name="deliveryAddress"
          placeholder=" enter Adress"
          autoComplete="{false}"
          onChange={onchange}
        />
        <input
          type="text"
          name="deliveryphone"
          placeholder="enter phone number"
          autoComplete="{false}"
          onChange={onchange}
        />
        <input
          type="text"
          name="deliveryCollege"
          placeholder=" enter your college Name"
          autoComplete="{false}"
          onChange={onchange}
        />
        <input
          type="text"
          name="deliveryBranch"
          placeholder="enter your Branch"
          autoComplete="{false}"
          onChange={onchange}
        />
        <input
          type="text"
          name="deliveryUsn"
          placeholder=" enter your USN "
          autoComplete="{false}"
          onChange={onchange}
        />
        <input
          type="text"
          name="deliveryYear"
          placeholder="enter Year"
          autoComplete="{false}"
          onChange={onchange}
        />
        <button>
          {" "}
          <b>Submit </b>
        </button>
      </form>
    </div>
  );
}

export default DeliveryForm;
