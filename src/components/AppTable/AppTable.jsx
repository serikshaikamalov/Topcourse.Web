import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { get } from "helpers";
import React, { useEffect, useRef, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import "./app-table.scss"

const DropdownMenu = ({ options, item }) => {
  const [isVisible, setIsVisible] = useState(false);

  const dropDownRef = useRef();

  useEffect(() => {
    window.addEventListener("click", clickOnDialog);

    return () => {
      window.removeEventListener("click", clickOnDialog);
    };
  }, []);

  const clickOnDialog = (e) => {
    if (dropDownRef.current && dropDownRef.current.contains(e.target)) {
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div
      className="options-menu-item"
      ref={dropDownRef}
    >
      <Button onClick={() => setIsVisible(!isVisible)}>
        <MdMoreVert size={20}></MdMoreVert>
      </Button>
      {isVisible && options && (
        <div
          style={{
            position: "absolute",
            background: "var(--background-color)",
            zIndex: 100,
            border: "1px solid #ddd",
            borderRadius: "5",
            left: -20,
          }}
        >
          {options.map(({ key, label, render, formatter, doAction }) => {
            return (
              <Button key={key} sx={{ width: "100%" }}>
                {render
                  ? render(item)
                  : typeof formatter === "function"
                    ? formatter(get(item, key))
                    : get(item, key)}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};

const AppTable = ({ data, columnConfig, rowConfig = () => ({}), ...rest }) => {
  const visibleColumnsHeaders = columnConfig
    .filter((x) => !x.isOptional)
    .map((x) => x.label);
  const columnHeaders = [...visibleColumnsHeaders];

  const visibleColumns = columnConfig.filter((x) => !x.isOptional);
  const hiddenColumns = columnConfig.filter((x) => x.isOptional);

  if (hiddenColumns?.length > 0) {
    columnHeaders.push("Options");
  }

  return (
    <div>
      <Table id={rest.id}>
        <TableHead>
          <TableRow>
            {columnHeaders.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow
                key={item.id}
                {...rowConfig(item, index)}
                data-index={index}
                draggable="false"
                {...rest?.rowProps}
              >
                {visibleColumns.map(
                  ({ key, label, render, formatter, doAction }) => {
                    return (
                      <TableCell
                        key={key}
                        data-label={label}
                        onClick={() =>
                          typeof doAction === "function" ? doAction(item) : null
                        }
                      >
                        {render
                          ? render(item, index)
                          : typeof formatter === "function"
                            ? formatter(get(item, key))
                            : get(item, key)}
                      </TableCell>
                    );
                  }
                )}
                {/* Options */}
                <TableCell
                  key={"options"}
                  data-label={"Дополнительно"}
                  sx={{ position: "relative" }}
                  onClick={() => { }}
                >
                  {/* Optional menu */}
                  {hiddenColumns && hiddenColumns?.length > 0 && (
                    <DropdownMenu
                      item={item}
                      options={hiddenColumns}
                    ></DropdownMenu>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* Pagination */}
    </div>
  );
};

export default AppTable;
