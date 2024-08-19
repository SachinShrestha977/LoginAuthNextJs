import jwt from "jsonwebtoken";
import { parse } from "cookie";

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parse(req.headers.cookie || "");
  const token = cookies.token;

  if (!token) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  try {
    jwt.verify(token, "abcdksfnmzndpowpenemdvncapsfaweo");
    return { props: {} }; // Authentication successful
  } catch (error) {
    return { redirect: { destination: "/login", permanent: false } };
  }
}

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the protected dashboard!</p>
    </div>
  );
};

export default Dashboard;
