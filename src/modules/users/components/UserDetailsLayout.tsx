import AccountSummary from "./AccountSummary";

const UserDetailsLayout = ({
  params,
  children,
}: {
  params: { userId: string };
  children: React.ReactNode;
}) => {
  return (
    <div>
      <AccountSummary params={{ userId: params.userId }} />
      <main>{children}</main>
    </div>
  );
};

export default UserDetailsLayout;
