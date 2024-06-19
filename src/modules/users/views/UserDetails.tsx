import "../styles/dashboard.scss";
import "../styles/user-table.scss";
import "../styles/user-details.scss";
export interface IUserDetails {
  params: Record<string, string>;
}
const UserDetails: React.FC<IUserDetails> = ({ params }) => {
  const { userId } = params;
  return (
    <>
      <div className="details-container container-shadow">
        <section>
          <h5>Personal Information</h5>
          <div>
            <p>full name</p>
            <p>Grace effioem</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>07060780922</p>
          </div>
          <div>
            <p>Email Address</p>
            <p className="email">grace@gmail.com</p>
          </div>
          <div>
            <p>Bvn</p>
            <p>07060780922</p>
          </div>
          <div>
            <p>Gender</p>
            <p>Female</p>
          </div>
          <div>
            <p>Marital status</p>
            <p>Single</p>
          </div>
          <div>
            <p>Children</p>
            <p>None</p>
          </div>
          <div>
            <p>Type of residence</p>
            <p>Parent’s Apartment</p>
          </div>
        </section>
        <section>
          <h5>Education and Employment</h5>
          <div>
            <p>level of education</p>
            <p>B.Sc</p>
          </div>
          <div>
            <p>employment status</p>
            <p>Employed</p>
          </div>
          <div>
            <p>sector of employment</p>
            <p>FinTech</p>
          </div>
          <div>
            <p>Duration of employment</p>
            <p>2 years</p>
          </div>
          <div>
            <p>office email</p>
            <p>grace@lendsqr.com</p>
          </div>
          <div>
            <p>Monthly income</p>
            <p>₦200,000.00- ₦400,000.00</p>
          </div>
          <div>
            <p>loan repayment</p>
            <p>40,000</p>
          </div>
        </section>
        <section>
          <h5>Socials</h5>
          <div>
            <p>Twitter</p>
            <p>@grace_effiom</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>Grace Effiom</p>
          </div>
          <div>
            <p>Instagram</p>
            <p>@grace_effiom</p>
          </div>
        </section>
        <section>
          <h5>Guarantor</h5>
          <div>
            <p>full name</p>
            <p>Grace effioem</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>07060780922</p>
          </div>
          <div>
            <p>Email Address</p>
            <p className="email">grace@gmail.com</p>
          </div>
          <div>
            <p>Relationship</p>
            <p>Sister</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserDetails;
