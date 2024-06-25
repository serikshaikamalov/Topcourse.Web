import "./show-counter.css";

const ShowCounter = ({ days, hours, minutes, seconds }) => (
  <div className="show-counter">
    <div className="counter__item">
      <span className="counter__amount">{days}</span>
      <span className="counter__unit">Күн</span>
    </div>
    <div className="counter__item">
      <span className="counter__amount">{hours}</span>
      <span className="counter__unit">Сағат</span>
    </div>
    <div className="counter__item">
      <span className="counter__amount">{minutes}</span>
      <span className="counter__unit">Минут</span>
    </div>
    <div className="counter__item">
      <span className="counter__amount">{seconds}</span>
      <span className="counter__unit">Секунд</span>
    </div>
  </div>
);

export default ShowCounter;
