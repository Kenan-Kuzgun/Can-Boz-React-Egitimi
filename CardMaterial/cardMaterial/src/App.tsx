import "./App.css";
import Course from "./components/Course";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import KompleWeb from "./images/kompleweb.jpg";
import Csharp from "./images/ccsharp.png";

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 20 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit nemo recusandae. Rerum illum eveniet veniam fugiat impedit odit illo provident itaque nemo. Vero, magni fugiat minima atque ratione consectetur!"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit nemo recusandae. Rerum illum eveniet veniam fugiat impedit odit illo provident itaque nemo. Vero, magni fugiat minima atque ratione consectetur!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={KompleWeb}
              title="KompleWeb"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit nemo recusandae. Rerum illum eveniet veniam fugiat impedit odit illo provident itaque nemo. Vero, magni fugiat minima atque ratione consectetur!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Csharp}
              title="Csharp"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit nemo recusandae. Rerum illum eveniet veniam fugiat impedit odit illo provident itaque nemo. Vero, magni fugiat minima atque ratione consectetur!"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
