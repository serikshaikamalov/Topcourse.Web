import "./salary.scss";

const Salary = () => {
  return (
    <section className="salary container mx-auto px-4">
      <div className="salary__left">
        <div className="salary__title">Фронтенд разработчик қанша табады</div>
        <div className="salary__text">
          Қазақстан бойынша Junior Frontend разработчиктің орташа жалақысы 300
          000₸, ал Middle Frontend разработчик айына 500 000₸, ал Senior
          деңгейдегі разработчиктердің орташа жалақысы 800 000₸
        </div>
      </div>
      <div className="salary__right">
        <div className="salary__piechart">
          <i className="fad fa-chart-pie fa-5x fa-swap-opacity"></i>
        </div>
        <div>
          <div className="salary__amount">~400 000₸</div>
          <div className="salary__average">
            hh.kz сайты бойынша Фронтенд разработчиктің 2021 жылға орташа
            жалақысы
          </div>
        </div>
      </div>
    </section>
  );
};

export default Salary;
