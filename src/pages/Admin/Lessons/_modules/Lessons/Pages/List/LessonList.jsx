import { useParams } from "react-router-dom";
import AppTable from "../../../../../../../components/AppTable/AppTable";
import ListPage from "../../../../../../../components/ListPage/ListPage";
import { operationsColumns } from "../../../../../../../helpers/operationsColumns";
import { useRemoteResource } from "../../../../../../../hooks/useRemoteResource";
import { columnConfig } from "./config";
import lessonsAdminService from "services/admin/lessonsAdminService";
import { useCallback, useEffect, useRef } from "react";
import LessonsService from "services/lessonsService";

const AdminLessonsPage = () => {
  const { chapterId } = useParams();
  const dragItem = useRef();
  const dragOverItem = useRef();

  const [data, loadData, loading, setData] = useRemoteResource(
    lessonsAdminService.getAllByChapter,
    chapterId
  );

  useEffect(() => {
    // do Reposition
    if (
      data?.length > 0 &&
      dragItem.current > -1 &&
      dragOverItem.current > -1
    ) {
      // TODO: Prepare data
      const toBackendData = data.map((i, index) => ({
        id: i.id,
        order: index+1,
      }));

      // TODO: Update backend
      LessonsService.reposition(chapterId, toBackendData).then((r) => {
        console.log("Reposition is done!");
      });
    }
  }, [chapterId, data]);

  // @TODO: Refactor
  const columnConfigWithOperations = [
    ...columnConfig,
    ...operationsColumns(lessonsAdminService.delete, loadData),
  ];

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

  return (
    <ListPage pageTitle="Список уроков">
      {data && (
        <AppTable
          columnConfig={columnConfigWithOperations}
          data={data}
          rowProps={{
            onDragStart: dragStart,
            onDragEnter: dragEnter,
            onDragEnd: dragEnd,
            draggable: true,
          }}
        ></AppTable>
      )}
    </ListPage>
  );
};

export default AdminLessonsPage;
