import {
  Add_Contact,
  EDIT_Contact,
  UPDATE_Contact,
  DELETE_Contact,
} from "./Type";

export const addContacts = (contact) => {
  return {
    type: Add_Contact,
    payload: contact,
  };
};

export const editContacts = (id) => {
  return {
    type: EDIT_Contact,
    payload: id,
  };
};

export const updateContacts = (contact) => {
  return {
    type: UPDATE_Contact,
    payload: contact,
  };
};

export const deleteContacts = (id) => {
  return {
    type: DELETE_Contact,
    payload: id,
  };
};
