import { Main } from "../components/Main/Main";
import { SideNav } from "../components/SideNav/SideNav";
import { Container } from "./Dashboard.style";

export const Dashboard = () => {
  return (
    <Container>
      <SideNav />
      <Main />
    </Container>
  );
};
