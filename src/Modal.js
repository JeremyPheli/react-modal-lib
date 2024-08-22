import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const CustomModal = ({ open, handleClose, message }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="custom-modal-title"
      aria-describedby="custom-modal-description"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <Box
          p={4}
          borderRadius={2}
          bgcolor="white"
          boxShadow={24}
          textAlign="center"
        >
          <Typography id="custom-modal-title" variant="h6">
            {message}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            sx={{ marginTop: 2 }}
          >
            Fermer
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
