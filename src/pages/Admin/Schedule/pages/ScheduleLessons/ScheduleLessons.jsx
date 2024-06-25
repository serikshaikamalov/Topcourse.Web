import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import { useRemoteResource } from "hooks/useRemoteResource";
import scheduleAdminService from "services/admin/scheduleAdminService";
import chaptersStudentService from "services/chaptersStudentService";
import "./schedule-lessons.scss";
import { useNavigate } from "react-router-dom";

const ScheduleLessons = ({ data: { schedule } }) => {
  const navigate = useNavigate();
  const [chapters] = useRemoteResource(
    chaptersStudentService.getAllByCourseId,
    schedule.courseId
  );

  let [scheduleLessons] = useRemoteResource(
    scheduleAdminService.getScheduleLessons,
    schedule.id
  );

  if (!chapters) {
    return <div>Добавте главы и уроки</div>;
  }

  const scheduleLessonsMap = new Map();

  if (scheduleLessons) {
    scheduleLessons.forEach((s) => {
      scheduleLessonsMap.set(s.lessonId, {
        id: s.id,
        accessStartDate: s.accessStartDate,
      });
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("scheduleLessonsMap", scheduleLessonsMap);

      if (scheduleLessonsMap.size > 0) {
        const toBackend = Array.from(scheduleLessonsMap).map(
          ([key, { accessStartDate, id }]) => {
            const element = {
              lessonId: key,
              accessStartDate: accessStartDate,
            };

            if (id) {
              element.id = id;
            }

            return element;
          }
        );

        console.log("toBackend: ", toBackend);
        await scheduleAdminService.addLessonsToSchedule(schedule.id, toBackend);
      }

      navigate(-1);
    } catch (ex) {
      console.error(ex.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {chapters.map((c) => {
        return (
          <div key={c.id} className="schedule__chapter">
            <div>
              <h2 className="schedule__chapter-name">
                {c.position}. {c.name}
              </h2>
              <ul>
                {c.lessons.map((l) => {
                  return (
                    <li key={l.id} data-lesson-id={l.id}>
                      <div className="schedule__lesson flex-row justify-between">
                        <div>
                          {l.order}. {l.name}
                        </div>
                        <div>
                          <input type="hidden" name="lessonId" value={l.id} />
                          <input
                            type="date"
                            name="accessStartDate"
                            placeholder="Выберите дату"
                            defaultValue={
                              scheduleLessonsMap.has(l.id)
                                ? scheduleLessonsMap.get(l.id).accessStartDate
                                : undefined
                            }
                            onChange={(e) => {
                              if (e.target?.value) {
                                scheduleLessonsMap.set(l.id, {
                                  ...scheduleLessonsMap.get(l.id),
                                  accessStartDate: e.target.value,
                                });
                              }
                            }}
                          />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
      <div className="schedule__buttons">
        <button type="submit">Сохранить</button>
        <button type="button">Отменить</button>
      </div>
    </form>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(ScheduleLessons, (router) => {
    return useLoadAll({
      schedule: () => scheduleAdminService.get(router.params.scheduleId),
    });
  })
);
