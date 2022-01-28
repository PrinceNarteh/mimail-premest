import { Main } from "../components/Main/Main";
import { SideNav } from "../components/SideNav/SideNav";
import { Container } from "./Dashboard.style";
import { useAuth } from "./../hooks/useAuth";

export const Dashboard = () => {
  const { token, user } = useAuth();

  console.log({ token, user });
  return (
    <Container>
      <SideNav />
      <Main />
    </Container>
  );
};
