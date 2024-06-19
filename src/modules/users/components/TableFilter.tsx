import { FilterUserTable } from "../types/filter-object.types";
import "../styles/user-table.scss";
import { ReactSVG } from "react-svg";
import { useRef, useState } from "react";

export interface ITableFilter {
  filterFn: (filterObject: FilterUserTable) => void;
  resetFn?: () => void;
}

const initialValue = {
  organization: "",
  username: "",
  email: "",
  date: "",
  phonenumber: "",
  status: "" as any,
};

const TableFilter: React.FC<ITableFilter> = ({ filterFn, resetFn }) => {
  const [filterObject, setFilterObject] =
    useState<FilterUserTable>(initialValue);
  const handleChange = (name: keyof FilterUserTable, value: string) => {
    setFilterObject({ ...filterObject, [name]: value });
  };
  const dateRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="table-filter">
        <form>
          <div className="form-control">
            <label htmlFor="organization">organization</label>
            <select
              name="organization"
              value={filterObject.organization}
              id="organization"
              onChange={(e) => handleChange("organization", e.target.value)}
            >
              <option value="" disabled>
                select
              </option>
              <option value="lendstar">LendStar</option>
              <option value="lendsqr">LendSqr</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="User"
              value={filterObject.username}
              onChange={(e) => handleChange("username", e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email"> email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={filterObject.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="date"> date</label>
            <input
              type="datetime-local"
              name="date"
              id="date"
              placeholder="Date"
              hidden
              ref={dateRef}
            />
            <div style={{ position: "relative" }}>
              <input
                style={{ position: "relative" }}
                type="text"
                name="date"
                id="date"
                placeholder="Date"
              />
              <button
                type="button"
                style={{
                  position: "absolute",
                  right: 4,
                  top: 0,
                  bottom: 0,
                  padding: 0,
                  background: "none",
                  border: "none",
                  outline: "none",
                }}
              >
                <ReactSVG src="/calendar.svg" />
              </button>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="phonenumber">Phone number</label>
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              value={filterObject.phonenumber}
              onChange={(e) => handleChange("phonenumber", e.target.value)}
              placeholder="Phone Number"
            />
          </div>
          <div className="form-control">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              value={filterObject.status}
              id="status"
              onChange={(e) => handleChange("status", e.target.value)}
            >
              <option value="" disabled>
                select
              </option>
              <option value="inactive">inactive</option>
              <option value="active">active</option>
              <option value="pending">pending</option>
              <option value="blacklisted">blacklisted</option>
            </select>
          </div>
          <div className="btn-group">
            <button
              type="button"
              id="reset"
              onClick={() => {
                setFilterObject(initialValue);
                resetFn && resetFn();
              }}
            >
              reset
            </button>
            <button
              type="button"
              id="filter"
              onClick={() => filterFn(filterObject)}
            >
              filter
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TableFilter;
