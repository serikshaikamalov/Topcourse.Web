import {
  Alert,
  Box,
  Button,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { useState } from "react";
import RequestsService from "../../../../services/requestsService";
import "./contact-form.scss";
import { useForm } from "react-hook-form";
import messages from "../../../../messages/message";

const ContactForm = ({ onClose }) => {
  const [serverMessage, setServerMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    console.log("data: ", data);

    const { name, email, phone } = data;

    await new RequestsService().post({
      name,
      email,
      phone,
    });

    setServerMessage({
      message:
        "Курсқа жазулыға өтінішіңіз қабылданды! Жақын арада сізбен курс менеджері хабарласады",
      status: "success",
    });

    try {
    } catch (error) {
      setServerMessage({
        message: "Серверная ошибка! Прошу повторить попытку позже",
        status: "error",
      });
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {serverMessage ? (
        <Alert
          onClose={handleClose}
          severity={serverMessage?.status}
          sx={{ width: "100%" }}
        >
          {serverMessage?.message}
        </Alert>
      ) : (
        <div className="contact-form">
          <DialogTitle
            sx={{
              paddingLeft: 0,
              paddingTop: 0,
              paddingBottom: "3px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Тегін консультация</span>
            <IconButton onClick={onClose}>
              <i className="fad fa-times" aria-hidden="true"></i>
            </IconButton>
          </DialogTitle>
          <DialogContentText sx={{ paddingBottom: "25px" }}>
            Жақын арада біздің маман сізбен хабарласады және сіздің
            сұрақтарыңызға жауап береді.
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                label="Атыңыз"
                autoComplete="new-password"
                fullWidth
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-danger">Есіміңізді еңгізіңіз</p>
              )}
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                type="number"
                label="Телефоңызды еңгізіңіз"
                fullWidth
                autoComplete="new-password"
                {...register("phone", {
                  required: true,
                  pattern: /^[7|8]\d{9}$/,
                })}
                InputProps={{
                  startAdornment: <div>+7</div>,
                }}
              />
              {errors.phone && (
                <p className="text-danger">
                  Телефон нөмерін осы форматта толтыру қажет: +77772001594
                </p>
              )}
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                type="text"
                label="Email"
                fullWidth
                {...register("email", {
                  required: false,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email қате еңгізілді",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger">Email қате еңгізілді</p>
              )}
            </Box>
            <Button
              className="contact-form__save-button"
              type="submit"
              variant="contained"
            >
              {messages.free_consultation}
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactForm;
