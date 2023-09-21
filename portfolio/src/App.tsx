import "./App.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { skillImage } from "./data/skillimg";
import {project} from "./data/project"
import io from "socket.io-client"
const socket = io('http://localhost:5000')
function App() {
  return (
    <>
      <div style={{ width: "100%", maxWidth: "70%", margin: "0 auto" }}>
        <Appbar />
        <TopSection />
        <Skill />
        <Project />
      </div>
    </>
  );
}

const TopSection = () => {
  const redirectToGithub = () => {
    window.location.href = "https://github.com/Sudipto-das";
  };
  return (
    <div style={{ marginTop: "5em" }}>
      <Typography
        style={{
          color: "#73C6B6",
          fontFamily: "initial",
          fontWeight: "bolder",
        }}
        variant="h2"
      >
        Hello! I am Sudipto.
      </Typography>
      <Typography
        variant="body1"
        paragraph
        style={{
          fontFamily: "initial",
          fontWeight: "lighter",
          color: "#B2B2C8",
        }}
      >
        I am a highly motivated and dedicated FullStack developer with 1 year of
        experience in creating responsive, user-friendly websites. My expertise
        in MERN Technology, along with my familiarity with Frameworks such as
        React and Nextjs, allows me to quickly and effectively build
        high-quality websites that meet the needs of my clients.
      </Typography>

      <Button
        style={{ border: "1px solid #2D9EBA" }}
        onClick={redirectToGithub}
      >
        GitHub
      </Button>
    </div>
  );
};

const Appbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1em",
        position:'sticky',
        top:'0',
        
      }}
    >
      <div >
        <img src="src/assets/s-logo (1).png" style={{width:'3em',borderRadius:'60%' }}></img>
      </div>
      <div
        style={{
          listStyle: "none",
          color: "#0E738C",
          display: "flex",
          gap: "1em",
          fontWeight: "bold",
        }}
      >
        <li>01. About</li>
        <li>02. Projects</li>
        <li>03. Contact</li>
      </div>
    </div>
  );
};

const Skill = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "3em",
          marginTop: "3em",
        }}
      >
        {skillImage.map((item) => (
          <img
            className="imghover"
            style={{
              width: "5em",
              height: "5em",
              borderRadius: "50%",
              border: "3.5px solid #2AC8EF",
              transition: "transform 0.3s ease-in-out",
            }}
            src={item.img}
            alt=""
          />
        ))}
      </div>
      <Container
        style={{ padding: "0", marginTop: "8em", marginBottom: "5em" }}
      >
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: "bolder",
            textEmphasisStyle: "double-circle",
            color: "teal",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 1)",
          }}
        >
          SKILLS
        </Typography>
        <Grid container spacing={2} style={{ marginTop: "2em" }}>
          <Grid item xs={12} md={4}>
            <Card
              className="skillCard"
              style={{
                background: "#68A1AF",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  style={{ textAlign: "center", fontFamily: "Poppins" }}
                >
                  FRONTEND
                </Typography>
                <ul style={{ listStyle: "none", color: "#072B34" }}>
                  <li>Reactjs</li>
                  <li>Nextjs</li>
                  <li>Recoil</li>
                  <li>MUI</li>
                  <li>TailWind</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="skillCard"
              style={{
                background: "#68A1AF",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  style={{ textAlign: "center", fontFamily: "Poppins" }}
                >
                  BACKEND
                </Typography>
                <ul style={{ listStyle: "none", color: "#072B34" }}>
                  <li>Node JS</li>
                  <li>Express Js</li>
                  <li>Next Js</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Prisma</li>
                </ul>
              </CardContent>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="skillCard"
              style={{
                background: "#68A1AF",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                  }}
                >
                  OTHERS TOOLS
                </Typography>
                <ul style={{ listStyle: "none", color: "#072B34" }}>
                  <li>GitHub</li>
                  <li>Postman</li>
                  <li>AWS</li>
                  <li>CI/CD</li>
                </ul>
              </CardContent>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
const Project = () => {
 
  return (
    <div>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          fontWeight: "bolder",
          textEmphasisStyle: "double-circle",
          color: "teal",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 1)",
        }}
      >
        PROJECTS
      </Typography>
      {
              project.map((item)=>( <Container style={{ marginTop: "2em" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt=""
                      image={item.projectImage}
                    ></CardMedia>
                  </Card>
                </Grid>
                <Grid item xs={12} md={7}>
                 
                  <div>
                    <Typography
                      variant="h5"
                      style={{
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        color:'#87BDB0'
                      }}
                    >
                      {item.projectName}
                    </Typography>
                    <Typography variant='body2' paragraph style={{color:'#82F1D8',fontFamily:'Poopins',fontWeight:'bold'}}>
                     {item.projectDescription}
                    </Typography>
                    <Typography variant='body2' paragraph style={{color:'#82F1D8',fontFamily:'Poopins',fontWeight:'bold'}}>
                     Login test Details
                    </Typography>
                    <Typography variant='body2' paragraph style={{color:'#82F1D8',fontFamily:'Poopins',fontWeight:'lighter'}}>
                     username:'demo@gmail.com'<br/>
                     password:'demo123'
                    </Typography>
                    <Button onClick={() => window.open(item.githublink, '_blank')}> GitHub</Button>
                    <Button onClick={() => window.open(item.website, '_blank')}>user Login</Button>
                    <Button onClick={() => window.open(item.adminwebsite, '_blank')}>Admin Login</Button>
                    <div>
                   
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
            ))
            }
     
    </div>
  );
};
const Contact = ()=>{

}

export default App;
