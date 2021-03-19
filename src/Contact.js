import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContacts } from "./Redux/Action";
import { useDispatch } from "react-redux";

const Contact = (props) => {
  const { name, phone, email, id } = props.contact;
  const { selectAll } = props;
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <th scope="col">
          <div>
            <input type="checkbox" aria-label="Checkbox" checked={selectAll} />
          </div>
        </th>
        <td>
          <Avatar className="mr-2" name={name} round={true} size="45" />
          {name}
        </td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>
          <div class="icons">
            <Link to={`/edit/contact/${id}`}>
              <i class="fas fa-edit mr-2"></i>
            </Link>
            <span onClick={() => dispatch(deleteContacts(id))}>
              <i class="fas fa-cut"></i>
            </span>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Contact;
