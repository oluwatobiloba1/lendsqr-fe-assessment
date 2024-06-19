import AccountSummary from "./AccountSummary";

const UserDetailsLayout = ({
  params,
  children,
}: {
  params: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <AccountSummary params={{ userId: params }} />
      <main>{children}</main>
    </div>
  );
};

export default UserDetailsLayout;
