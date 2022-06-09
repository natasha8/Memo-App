import React, { useContext } from "react";
import Context from "../store/contex";

const Modal = () => {
    const { setEdit, onEditSubmit, edit } = useContext(Context);
    return (
        <form
            className="Modal  position-absolute  top-0 start-0 d-flex justify-content-center align-items-center "
            onSubmit={onEditSubmit}
        >
            <div className="modal-dialog w-25 border p-4 bg-white">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Edit todo
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setEdit(null)}
                        ></button>
                    </div>
                    <div className="modal-body m-2">
                        <input
                            defaultValue={edit.value}
                            name="todo"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="modal-footer ">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => setEdit(false)}
                        >
                            Close
                        </button>
                        <button type="submit" className="btn btn-primary m-2">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Modal;
