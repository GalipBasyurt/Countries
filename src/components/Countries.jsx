import axios from "axios";
import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Countries = ({ removeSelectRegion, selectedRegion }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/region/${selectedRegion}`
        );
        const data = await response.data;
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log("Hata!!!", error);
      }
    };
    getData();
  }, [selectedRegion]);
  return (
    <Container>
      {loading ? (
        <div className="progress">
          <LinearProgress />
        </div>
      ) : (
        <Grid container columns={12} spacing={4} sx={{ margin: "20px 0" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => removeSelectRegion()}
            >
              Pick Another Region
            </Button>
          </Grid>
          {data?.map((country) => (
            <Grid
              key={country.name.common}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
            >
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  sx={{ height: 150 }}
                  image={country.flags.png}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {country.name.common}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Capital: ${country.capital}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Population: ${country.population}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Countries;
