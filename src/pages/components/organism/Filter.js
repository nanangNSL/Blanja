import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import * as Type from "../../../redux/filter/type"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};


export default function Filter() {
  
    const { filter } = useSelector((state) => state)
    let value;
    if(filter === true){
        value = filter?.click?.click;
    }else{
        value = filter?.click?.click;
    }
  const [open, setOpen] = React.useState(false);
  React.useEffect(()=>{
    if(value){
        setOpen(true)
    }
  },[value])
  const dispatch = useDispatch();
  const handleClose = () => {
   
    dispatch({
        type: Type.SET_CLICK,
        payload: {
          click : false,
        }
      })
      setOpen(false);
  };


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    </div>
  );
}
