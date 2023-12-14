import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

const Region = ({ onRegionSelect }) => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box
            sx={{
              bgcolor: "#fff",
              minHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              margin: "20px 0",
            }}
          >
            <Grid spacing={1} container columns={12}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div
                  className="region-container"
                  onClick={() => onRegionSelect("africa")}
                >
                  <img
                    style={{ width: "300px", height: "300px" }}
                    src="https://www.pngall.com/wp-content/uploads/5/Vector-Africa-Map-PNG.png"
                    alt=""
                  />
                  <Typography variant="4h">Africa</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div
                  className="region-container"
                  onClick={() => onRegionSelect("americas")}
                >
                  <img
                    style={{ width: "300px", height: "300px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag-map_of_the_americas.png"
                    alt=""
                  />
                  <Typography variant="4h">Americas</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div
                  className="region-container"
                  onClick={() => onRegionSelect("asia")}
                >
                  <img
                    style={{ width: "300px", height: "300px" }}
                    src="https://rayhaber.com/wp-content/uploads/2019/03/asia_map.png"
                    alt=""
                  />
                  <Typography variant="4h">Asia</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div
                  className="region-container"
                  onClick={() => onRegionSelect("europe")}
                >
                  <img
                    style={{ width: "300px", height: "300px" }}
                    src="https://fun-play.co.uk/wp-content/uploads/Playground-Marking-Map-Of-Europe.png"
                    alt=""
                  />
                  <Typography className="text" variant="5h">
                    Europe
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Region;
