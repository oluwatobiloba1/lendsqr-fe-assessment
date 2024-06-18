import {
  Column,
  ColumnDef,
  PaginationState,
  Table,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect } from "react";
import "../styles/user-table.scss";
import Tag from "../../../components/Tag";
import { DateHelper } from "../../../utils/date-helper";
import { ReactSVG } from "react-svg";
import { Link } from "@tanstack/react-router";

export interface IUsersTable {
  users: Array<User>;
}
const statusStying: Record<User["status"], { bg: string; color: string }> = {
  inactive: { color: "#545F7D", bg: "rgba(84, 95, 125, 0.06)" },
  blacklisted: { color: "#E4033B", bg: "rgba(228, 3, 59, 0.1)" },
  pending: { color: "#E9B200", bg: "rgba(233, 178, 0, 0.1)" },
  active: { color: "#39CD62", bg: "rgba(57, 205, 98, 0.06)" },
};
const UsersTable: React.FC<IUsersTable> = ({ users }) => {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [limit, setLimit] = React.useState<number>(50);
  const columnHelper = createColumnHelper<User>();
  const columns = [
    columnHelper.accessor("personalinfo.organization", {
      header: "Organization",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("personalinfo.fullname", {
      id: "username",
      cell: (info) => info.getValue(),
      header: "username",
    }),
    columnHelper.accessor("personalinfo.email", {
      header: () => "email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("personalinfo.phonenumber", {
      cell: (info) => info.getValue(),
      header: "phone number",
    }),
    columnHelper.accessor("dateJoined", {
      cell: (info) => DateHelper.dateWithTime(info.getValue()),
      header: "date joined",
    }),
    columnHelper.accessor("status", {
      cell: (info) => (
        <Tag
          style={{
            backgroundColor: statusStying[info.getValue()].bg,
            color: statusStying[info.getValue()].color,
          }}
        >
          {info.getValue()}
        </Tag>
      ),

      header: "status",
    }),
    columnHelper.accessor("personalinfo.fullname", {
      id: "id",
      header: "",
      cell: (info) => (
        <div style={{ position: "relative", zIndex: 0 }}>
          <button
            onClick={() => {
              if (selectedId === info.getValue()) {
                setSelectedId(null);
              } else {
                setSelectedId(info.row.original.personalinfo.fullname);
              }
            }}
            style={{
              background: "none",
              border: "none",
              outline: "none",
              position: "relative",
            }}
          >
            <img src="/ellipsis.svg" alt="" />
          </button>
          {selectedId === info.getValue() && (
            <div onBlur={() => setSelectedId(null)} className="ctx-menu">
              <div>
                <ReactSVG src={"/row-menu/view.svg"} />
                <Link to={`/users/${info.getValue()}`}>
                  <p>view details</p>
                </Link>
              </div>
              {info.row.original.status !== "blacklisted" && (
                <div>
                  <ReactSVG src={"/row-menu/blacklist.svg"} fill="none" />
                  <p>blacklist user</p>
                </div>
              )}
              {(info.row.original.status === "inactive" ||
                info.row.original.status === "blacklisted") && (
                <div>
                  <ReactSVG src={"/row-menu/activate.svg"} />
                  <p>activate user</p>
                </div>
              )}
            </div>
          )}
        </div>
      ),
    }),
  ];

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });
  const table = useReactTable({
    columns,
    data: users,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      pagination,
    },
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
  });
  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          columnGap: "6px",
                          padding: " .5em 0",
                          paddingRight: ".5em",
                          textTransform: "uppercase",
                        }}
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {/* {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null} */}
                        {header.getContext().header.id !== "id" && (
                          <i
                            className="fi fi-rs-bars-filter"
                            style={{ marginTop: "2px" }}
                          ></i>
                        )}
                        {/* {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null} */}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="table-row">
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <div className="limit-group">
          <span>
            <p style={{ textTransform: "capitalize" }}>showing</p>
          </span>
          <select
            value={table.getState().pagination.pageSize}
            name="limit"
            id="limit"
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
            <option value={400}>400</option>
            <option value={500}>500</option>
          </select>
          <span>
            <p>out of 500</p>
          </span>
        </div>
        <div className="page-group">
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.setPageIndex((prev) => prev - 1)}
          >
            {"<"}
          </button>
          <span>{table.getState().pagination.pageIndex + 1}</span>
          <span style={{ opacity: 0.5 }}>
            {table.getState().pagination.pageIndex + 2}
          </span>
          <span style={{ opacity: 0.5 }}>
            {table.getState().pagination.pageIndex + 3}
          </span>
          {table.getPageCount() && (
            <span style={{ opacity: 0.5, cursor: "default" }}>...</span>
          )}
          <span style={{ opacity: 0.5 }}>{table.getPageCount() - 1}</span>
          <span style={{ opacity: 0.5 }}>{table.getPageCount()}</span>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.setPageIndex((prev) => prev + 1)}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
