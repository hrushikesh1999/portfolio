import { Card, CardContent, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CardDetails } from "../../../types/card-details";
import "./customCard.css";
import { motion } from "framer-motion";

type CustomCardProps = {
  content: CardDetails;
};

const item = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const CustomCard = ({ content }: CustomCardProps) => {
  const { title, description, from, to, tags } = content;
  return (
    <motion.div variants={item}>
      <Card>
        <CardContent>
          <div className="card-header">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="subtitle2">
              {from} - {to}
            </Typography>
          </div>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Box>
            {tags.map((tag, i) => (
              <Chip
                key={i}
                size="small"
                label={tag}
                variant="filled"
                sx={{
                  fontSize: "x-small",
                  height: "1rem",
                  mx: "0.1rem",
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CustomCard;
