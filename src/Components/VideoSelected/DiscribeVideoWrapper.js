import {
  Paper,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Container,
  Collapse,
} from "@mui/material";
import { useRef, useState } from "react";
import moment from "moment";
import { formatNumber } from "../../Helpers/convertFunctions";

export const DiscribeVidoWrapper = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  // const { description, publishedAt } = data;
  // const { viewCount } = data.statistics;

  const { publishedAt, description } = data;
  const { viewCount } = data.statistic;

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };

  return (
    <Container style={{ padding: 0 }} onClick={() => handleExpandClick()}>
      <Paper elevation={2} style={{ padding: "20px" }}>
        <Typography variant="h9" gutterBottom>
          {formatNumber(viewCount)} wyswielten
          {moment(publishedAt).startOf("hour").fromNow()}
        </Typography>

        <Collapse in={expanded}>{description}</Collapse>

        <Button onClick={() => handleExpandClick()}>
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </Paper>
    </Container>
  );
};
