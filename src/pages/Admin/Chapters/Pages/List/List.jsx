import AppTable from "components/AppTable/AppTable";
import ListPage from "components/ListPage/ListPage";
import { getColumnConfig } from "../../helpers/tableColumns";
import chaptersService from "services/chaptersService";
import withRouter from "hoc/withRouter";
import { useCallback, useEffect, useRef, useState } from "react";

const AdminChaptersListPage = ({
  router: {
    params: { id: courseId },
  },
}) => {
  const [data, setData] = useState([]);
  const dragItem = useRef();
  const dragOverItem = useRef();

  async function loadData() {
    const { data: response } = await chaptersService.getAllByCourseId(courseId);
    setData(response);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (
      data?.length > 0 &&
      dragItem.current > -1 &&
      dragOverItem.current > -1
    ) {
      // TODO: Prepare data
      const toBackendData = data.map((i, index) => ({
        id: i.id,
        position: index+1,
        name: i.name,
      }));

      // TODO: Update backend
      chaptersService.reposition(courseId, toBackendData).then((r) => {
        console.log("Reposition is done!");
      });
    }
  }, [courseId, data]);

  const columnConfig = getColumnConfig(chaptersService.delete, loadData);

  const dragStart = (e) => {
    // Выбранный элемент
    console.log("dragstart:", e.target.getAttribute("data-index"));

    if (e.target.getAttribute("data-index")) {
      dragItem.current = e.target.getAttribute("data-index");
    }
  };

  const dragEnter = (e) => {
    // Элемент который произошел drop
    const row = e.target.closest("tr");

    if (row) {
      dragOverItem.current = row.getAttribute("data-index");
    }
  };

  const dragEnd = useCallback(
    (e) => {
      console.group("Drag end");
      console.log({
        selected: dragItem.current,
        replace: dragOverItem.current,
        data,
        trElement: e.target.closest("tr"),
      });

      if (
        typeof dragItem.current === "string" &&
        typeof dragOverItem.current === "string"
      ) {
        dragItem.current = Number(dragItem.current);
        dragOverItem.current = Number(dragOverItem.current);

        const copyListItems = JSON.parse(JSON.stringify(data));
        const dragItemContent = copyListItems[dragItem.current];
        // Remove it first
        copyListItems.splice(dragItem.current, 1);
        // Switch
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;

        console.log("CopiedItems: ", copyListItems);
        setData(copyListItems);

        console.log("Data after: ", data);
        console.groupEnd();
      }
    },
    [data, setData]
  );

  // if (!data || data.length === 0) return <div>No content yet</div>;

  return (
    <ListPage pageTitle="Список глав">
      <AppTable
        columnConfig={columnConfig}
        data={data}
        rowProps={{
          onDragStart: dragStart,
          onDragEnter: dragEnter,
          onDragEnd: dragEnd,
          draggable: true,
        }}
      />
    </ListPage>
  );
};
export default withRouter(AdminChaptersListPage);
