import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editContacts,updateContacts } from "./Redux/Action";
import shortid from "short-id";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  //const id = shortid;
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const contact = useSelector((state) => state.contacts.contact);

  useEffect(() => {
    if (contact !== null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(editContacts(id));
  }, [contact]);

  const updateContact= (e) =>{
    e.preventDefault();
    const update_contact = Object.assign(contact,{name:name,phone:phone,email:email});
    dispatch(updateContacts(update_contact));
    history.push("/")
  }

  return (
    <form
      className="needs-validation"
      noValidate
      onSubmit={(e)=>updateContact(e)}
    >
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="validationTooltip01">First name</label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip01"
            placeholder="First name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            value={name}
            required
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationTooltip02">Phone</label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip02"
            name="lastName"
            placeholder="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationTooltipUsername">Email</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                @
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              id="validationTooltipUsername"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              aria-describedby="validationTooltipUsernamePrepend"
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        update Contact
      </button>
    </form>
  );
};

export default EditContact;
