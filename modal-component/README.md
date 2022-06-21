# Modal-Component-anpl33

A modal dialog component for React.

## Getting started

### Installation

Add modal-component to your project by executing `npm i modal-component-anlp33` or `yarn add modal-component-anlp33`.

### Usage

Here's an example of basic usage in a form component:

```js
import React, { useState } from 'react';
import Modal from "modal-component-anlp33/dist/Modal"

function Form(){

const [openModal, setOpenModal] = useState(false);
const [formDisplay, setFormDisplay] = useState(true);

//when you submit the form
const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
    setFormDisplay(!formDisplay);


return (
  <div>
    <Modal
              message={"Employee successfully created"}
              onClose={() => {
                setOpenModal(!openModal);
                setFormDisplay(!formDisplay);
              }}
            />
  </div>
)
}

```
#### Props
#### message `string`
Customizable message in the dialog box.
#### onClose `function`
Customizable function to close the modal.

## Author

<table>
  <tr>
    <td>
     Anne-Laure Poiré<br />
      <a href="mailto:annelaure.poire@gmail.com">annelaure.poire@gmail.com</a><br />
    </td>
  </tr>
</table>

## Thank you