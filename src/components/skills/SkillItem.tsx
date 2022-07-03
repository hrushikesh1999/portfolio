import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { SkillListItem } from "../../types/skill-list-item";
import "./skillItem.css";
import { motion } from "framer-motion";

type SkillListProps = SkillListItem;

const item = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SkillItem = ({ title, items }: SkillListProps) => {
  return (
    <motion.div className="skill-item" variants={item}>
      <Card>
        <div className="skill-item-header">
          <Typography variant="h6" color="text.primary">
            {title}
          </Typography>
        </div>
        <div>
          <List>
            {items.map((item, i) => (
              <ListItem disablePadding key={i}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      alt={item.alt}
                      src={item.image}
                      sx={{ width: 24, height: 24 }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Card>
    </motion.div>
  );
};

export default SkillItem;
