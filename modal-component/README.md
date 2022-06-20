# modal-component

A library of a modal React component.

## Installation

```
npm i modal-component-anlp33
```
## Example

Example of a modal display in a form component.

```
import Modal from "modal-component-anlp33/dist/Modal"

const [openModal, setOpenModal] = useState(false);
const [formDisplay, setFormDisplay] = useState(true);

<Modal
          message={"Employee successfully created"}
          closeModal={() => {
            setOpenModal(false);
            setFormDisplay(!formDisplay);
          }}
        />
```
