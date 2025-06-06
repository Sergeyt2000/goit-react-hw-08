import css from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
    
  const handleDelete = () => {
      toast.success("Successfully deleted!");
      dispatch(deleteContact(id));  
      handleCloseModal();
  };

  return (
    <div className={css.contactBox}>
      <div className={css.contact}>
        <div className={css.contactInfo}>
          <RiContactsFill />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.contactInfo}>
          <MdPhone />
          <p>{number}</p>
        </div>
      </div>
      {isModalOpen ? (
        <Modal
          handleCloseModal={handleCloseModal}
          handleDelete={handleDelete}
        />
      ) : (<button
        className={css.delbtn}
        type="button"
        onClick={() => handleOpenModal()}
      >
        Delete
      </button>)}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}
