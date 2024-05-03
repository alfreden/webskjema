import './modal.css';
import Button from '../button';

interface ModalProps {
    setIsOpen: (value: boolean) => void;
    show: boolean;
    children?: JSX.Element;
}

const CenteredMessage = ({ setIsOpen, children, show }: ModalProps) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <div className="closeButton">
            <Button label={'Close'} variant="filled" onClick={() => setIsOpen(false)} />
          </div>
        </section>
      </div>
    );
};

export default CenteredMessage;