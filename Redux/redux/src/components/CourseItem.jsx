import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { removeItem } from "../control/cartSlice";
import { increasse } from "../control/cartSlice";
import { decrease } from "../control/cartSlice";

function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ objectFit: "contain" }}
            image={img}
            alt="courseImage"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price}TL
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => dispatch(removeItem(id))}
          >
            Sil
          </Button>
        </CardActions>
      </Card>
      <label>
        <h3>{quantity}</h3>
      </label>
      <ButtonGroup>
        <Button aria-label="increase" onClick={() => dispatch(decrease(id))}>
          <RemoveIcon fontSize="small" />
        </Button>
        <Button aria-label="decrease" onClick={() => dispatch(increasse(id))}>
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CourseItem;
