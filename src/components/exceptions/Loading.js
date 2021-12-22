import Modal from 'react-modal';
import './Loading.scss';

export function Loading() {
    const open = true;
    return (
        <div>
        <Modal
            isOpen={open}
            contentLabel="Global Modal"
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
           <div className="loading-modal-bg">
             <div className="w-1/2">
               <svg className="spinner" width="40px" height="40px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                  <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
               </svg>
             </div>
             <div className="w-1/2">
                Loading...
             </div>
           </div>
        </Modal>
        </div>
    );
}
