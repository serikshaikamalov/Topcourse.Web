import "./app-card.scss";

const AppCard = ({ children, variant }) => {
  return <div className={`app-card ${variant}`}>{children}</div>;
};

export default AppCard;
