import { Link, useMatchRoute } from "@tanstack/react-router";
import { ReactSVG } from "react-svg";
import { CurrencyHelper } from "../../../utils/currency-helper";
import "../styles/user-details.scss";

export interface IAccountSummary {
  params: Record<string, string>;
}

const AccountSummary: React.FC<IAccountSummary> = ({ params }) => {
  const BASEURL = `/users/${params.userId}/`;

  const matchRoute = useMatchRoute();
  return (
    <div>
      <Link className="arrow-nav" to="/users">
        <span>
          <i className="fi fi-rs-arrow-left"></i>
        </span>
        <p>Back to Users</p>
      </Link>
      <div className="page-header">
        <h2>User Details</h2>
        <div className="btn-group">
          <button id="blacklist">blacklist user</button>
          <button id="activate">activate user</button>
        </div>
      </div>
      <section className="account-section container-shadow">
        <div className="account-details">
          <div className="account-profile">
            <div className="profile-pic">
              <img src="/user-profile.png" alt="" />
            </div>
            <div className="name">
              <p>Grace effioem</p>
              <p>LSQFf587g90</p>
            </div>
          </div>
          <div className="tier">
            <UsersTier count={1} />
          </div>
          <div className="balance">
            <p>{CurrencyHelper.formatCurrency(200000)}</p>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                className={matchRoute({ to: BASEURL }) ? "active-nav" : ""}
                to={BASEURL}
              >
                General Details
              </Link>
            </li>
            <li>
              <Link
                className={
                  matchRoute({ to: BASEURL + "documents" }) ? "active-nav" : ""
                }
                to={BASEURL + "documents"}
              >
                Documents
              </Link>
            </li>
            <li>
              <Link
                className={
                  matchRoute({ to: BASEURL + "bank-details" })
                    ? "active-nav"
                    : ""
                }
                to={BASEURL + "bank-details"}
              >
                Bank Details
              </Link>
            </li>
            <li>
              <Link
                className={
                  matchRoute({ to: BASEURL + "loans" }) ? "active-nav" : ""
                }
                to={BASEURL + "loans"}
              >
                Loans
              </Link>
            </li>
            <li>
              <Link
                className={
                  matchRoute({ to: BASEURL + "savings" }) ? "active-nav" : ""
                }
                to={BASEURL + "savings"}
              >
                Savings
              </Link>
            </li>
            <li>
              <Link
                className={
                  matchRoute({ to: BASEURL + "app-systems" })
                    ? "active-nav"
                    : ""
                }
                to={BASEURL + "app-systems"}
              >
                App and System
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default AccountSummary;

const UsersTier = ({ count }: { count: number }) => {
  return (
    <>
      <p>User's Tier</p>

      <div>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <ReactSVG
              key={i}
              src="/star.svg"
              beforeInjection={(svg) => {
                svg.classList.add("svg-class");
              }}
            />
          ))}
      </div>
    </>
  );
};
