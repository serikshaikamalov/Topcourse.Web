import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CrudPage = ({ children, title }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Button onClick={() => navigate(-1)}>Назад</Button>
        <h2>{title}</h2>
      </div>
      {children}
    </>
  );
};

export default CrudPage;
