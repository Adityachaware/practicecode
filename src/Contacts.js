import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import { useState } from "react";

const Contacts = () => {
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contacts.contacts);
  return (
    <div className="container alignment">
      <table className="table border">
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              <div>
                <input id="selectAll" value={selectAll} type="checkbox" aria-label="Checkbox" onClick={() => setSelectAll(!selectAll)}/>
                <label htmlFor="selectAll"></label>
              </div>
            </th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
