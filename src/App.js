import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Modal from "./components/Modal";
import Context from "./store/contex";

function App() {
    const { edit } = useContext(Context);

    return (
        <div className="container mt-4 w-20">
            <h1 className="text-center p-4 fw-bold">My Memo List</h1>
            <Form />
            <ListGroup />
            {edit && <Modal />}
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
