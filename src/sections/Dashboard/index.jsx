import Layout from "./layout";

const LayoutDashboard = ({ children }) => {
  return (
    <Layout>
      <div className="py-7">{children}</div>{" "}
    </Layout>
  );
};

export default LayoutDashboard;
