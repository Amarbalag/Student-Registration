import React, { useState } from "react";
import DeliveryForm from "./DeliveryForm";

function DeliveryList() {
  const [items, setItems] = useState([]);

  const addToList = (item) => {
    console.log(item);
    const itemscopy = [...items];
    itemscopy.push(item);
    setItems(itemscopy);
  };
  return (
    <div>
      <DeliveryForm addToListCallback={(data) => addToList(data)} />
      <table>
        <thead>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Address</th>
          <th>PhoneNumber</th>
          <th>CollegeName</th>
          <th>Branch</th>
          <th>USN</th>
          <th>Year</th>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.title}>
                <td>{item.deliveryName}</td>
                <td>{item.deliveryLastName}</td>
                <td>{item.deliveryAddress}</td>
                <td>{item.deliveryPhone}</td>
                <td>{item.deliveryCollege}</td>
                <td>{item.deliveryBranch}</td>
                <td>{item.deliveryUsn}</td>
                <td>{item.deliveryYear}</td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DeliveryList;
