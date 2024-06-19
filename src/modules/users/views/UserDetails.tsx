import "../styles/dashboard.scss";
import "../styles/user-table.scss";
import "../styles/user-details.scss";
import { useEffect, useState } from "react";
import { User } from "../types/user.type";
import { CurrencyHelper } from "../../../utils/currency-helper";

const UserDetails: React.FC = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    const storedUser = localStorage.getItem("clickedUSer");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  });
  if (!user) return <div className="skeleton" style={{ width: "100%" }}></div>;
  return (
    <>
      <div className="details-container container-shadow">
        <section>
          <h5>Personal Information</h5>
          <div>
            <p>full name</p>
            <p>{user.personalinfo.fullname}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{user.personalinfo.phonenumber}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p className="email">{user.personalinfo.email}</p>
          </div>
          <div>
            <p>Bvn</p>
            <p>{user.personalinfo.bvn}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{user.personalinfo.gender}</p>
          </div>
          <div>
            <p>Marital status</p>
            <p>{user.personalinfo.maritalStatus}</p>
          </div>
          <div>
            <p>Children</p>
            <p>
              {user.personalinfo.numberOfChildren === 0
                ? "none"
                : user.personalinfo.numberOfChildren}
            </p>
          </div>
          <div>
            <p>Type of residence</p>
            <p>{user.personalinfo.typeOfResidence}</p>
          </div>
        </section>
        <section>
          <h5>Education and Employment</h5>
          <div>
            <p>level of education</p>
            <p>{user.employment.levelOfEducation}</p>
          </div>
          <div>
            <p>employment status</p>
            <p>{user.employment.employmentStatus}</p>
          </div>
          <div>
            <p>sector of employment</p>
            <p>{user.employment.employmentSector}</p>
          </div>
          <div>
            <p>Duration of employment</p>
            <p>{user.employment.durationOfEmployment} years</p>
          </div>
          <div>
            <p>office email</p>
            <p>{user.employment.officialEmail}</p>
          </div>
          <div>
            <p>Monthly income</p>
            <p>₦200,000.00- ₦400,000.00</p>
          </div>
          <div>
            <p>loan repayment</p>
            <p>
              {CurrencyHelper.formatCurrency(user.employment.loanRepayment)}
            </p>
          </div>
        </section>
        <section>
          <h5>Socials</h5>
          <div>
            <p>Twitter</p>
            <p>{user.socials.twitter}</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>{user.socials.facebook}</p>
          </div>
          <div>
            <p>Instagram</p>
            <p>{user.socials.instagram}</p>
          </div>
        </section>
        <>
          <h5>Guarantor</h5>
          {user.guarantor.map((guarantor, _) => (
            <section key={guarantor.fullname}>
              <div>
                <p>full name</p>
                <p>{guarantor.fullname}</p>
              </div>
              <div>
                <p>Phone Number</p>
                <p>{guarantor.phonenumber}</p>
              </div>
              <div>
                <p>Email Address</p>
                <p className="email">{guarantor.email}</p>
              </div>
              <div>
                <p>Relationship</p>
                <p>{guarantor.relationship}</p>
              </div>
            </section>
          ))}
        </>
      </div>
    </>
  );
};

export default UserDetails;
