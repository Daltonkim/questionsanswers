
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { modalActions } from '../../_actions';

import { DeleteQuestion } from '../../createdModals/deleteQuestion';
import { DeleteAllQuestions } from '../../createdModals/deleteAllQuestion';
import './ModalRoot.scss';
import { EditQuestion } from '../../createdModals/editQuestion';
import { AddQuestion } from '../../createdModals/addQuestion';

const MODAL_COMPONENTS = {
    ADD_QUESTION:AddQuestion,
    EDIT_QUESTION: EditQuestion,
    DELETE_ALL_QUESTIONS: DeleteAllQuestions,
    DELETE_QUESTION: DeleteQuestion,

};

Modal.setAppElement(document.getElementById('root'));

const ModalRoot = ({ type, content, dispatch}) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    if (!type) {
        return null;
    }

    const closeModal = () => {
        setModalIsOpen(false);
        dispatch(modalActions.clear());
    };

    if (type === 'HIDE_MODAL') {
        closeModal();
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[type];

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            data-testId='modal'
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: 0,
                    zIndex: 9999,
                    backgroundImage: 'radial-gradient( circle at 50% 0px, rgba(241, 248, 255, 0.4), rgba(238, 244, 249, 0.4) )',
                },
                content: {
                    position: 'relative',
                    top: 'auto',
                    left: 'auto',
                    right: 'auto',
                    bottom: 'auto',
                    border: 'none',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    outline: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    background: 'transparent',
                },
            }}
        >
            { SpecificModal && <SpecificModal modalID={1} type={type} data={content} /> }
        </Modal>
    );
};

const mapStateToProps = (state) => {
    const { modals } = state;
    return (modals);
};

const connectedModalRoot = connect(mapStateToProps)(ModalRoot);
export { connectedModalRoot as ModalRoot };
