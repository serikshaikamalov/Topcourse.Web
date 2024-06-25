import ListPage from "components/ListPage/ListPage";
import { useRemoteResource } from "hooks/useRemoteResource";
import { listConfig } from "tableColumns/users-columns";
import AppAdminTable from "components/AppAdminTable/AppAdminTable";
import usersService from "services/admin/usersService";
import { useEffect, useRef, useState } from "react";
import Pagination from "components/Pagination/Pagination";
import { urlReplaceState } from "helpers/url";
import withRouter from "hoc/withRouter";
import { Link } from "react-router-dom";
import { Button, IconButton, TextField } from "@mui/material";
import { FaFileAlt, FaSearch } from "react-icons/fa";

function BulkButton() {
  return (
    <span>
      <Link to="add-bulk">
        <Button variant="contained">
          <FaFileAlt /> &nbsp;
          Добавить через CSV
        </Button>
      </Link>
    </span>
  );
}

const List = ({ router: { queryParams } }) => {
  const searchRef = useRef();

  const [search, setSearch] = useState({
    page: queryParams.get("page") || 1,
    showFullInfo: true,
    query: queryParams.get("query") || "",
  });

  const [data, loadData, loading] = useRemoteResource(
    usersService.getAll,
    search
  );

  const onDelete = async (item) => {
    await usersService.delete(item.id);
    loadData();
  };

  // Figure out how to make it clear
  const banIndex = listConfig.findIndex((x) => x.key === "isBan");
  listConfig[banIndex].doAction = async (item) => {
    try {
      await usersService.ban(item.id, { isBan: !item.isBan });
      loadData();
    } catch (ex) {
      console.error(ex);
    }
  };

  useEffect(() => {
    // Используется для обновления состояние url
    urlReplaceState(null, search);
  }, [search]);

  const onSubmit = (e) => {
    e.preventDefault();

    const query = String(searchRef.current.value).trim();
    updateSearch({ query });
  };

  const updateSearch = (params) => {
    setSearch({
      ...search,
      ...params,
    });
  };

  return (
    <ListPage pageTitle="Список пользователей" bulk={BulkButton}>
      {/* Searching */}
      <form className="search__inputs mt-4 mb-4" onSubmit={onSubmit}>
        <div className="flex">
          <TextField type="search" placeholder="Поиск по имени или по почте" inputRef={searchRef} autoComplete="off" className="m-w-100" style={{ minWidth: 300 }}></TextField>
          <IconButton type="submit" size="large">
            <FaSearch></FaSearch>
          </IconButton>
        </div>
      </form>
      <AppAdminTable
        columnConfig={listConfig}
        data={data?.data || []}
        onDelete={onDelete}
        loading={loading}
      />
      {/* Pagination */}
      {data && (
        <Pagination total={data.total} limit={50} onPageChange={updateSearch} />
      )}
    </ListPage>
  );
};

export default withRouter(List);
