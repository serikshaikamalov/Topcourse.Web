import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ListPage({ children, pageTitle, ...rest }) {
  console.log("Spread: ", rest);
  return (
    <div>
      <div className="flex-row flex-space-between" style={{ flexWrap: "wrap" }}>
        <h2 className="text-2xl">{pageTitle}</h2>
        <div className="gap-4 flex" style={{ alignItems: "center" }}>
          <span className="m-r-8">
            <Button
              onClick={() => {
                // navigate(-1)
                console.log(window.history);
                window.history.back();
              }}
            >
              Назад
            </Button>
          </span>
          <Link to="add">
            <Button variant="contained">+Добавить</Button>
          </Link>
          {rest ? (
            <>
              {Object.values(rest).map((C, inx) => (
                <C key={inx} />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export default ListPage;
