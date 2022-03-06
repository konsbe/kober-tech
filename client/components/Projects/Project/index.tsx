import React, { Dispatch } from "react";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core/";
import CardMedia from "@mui/material/CardMedia";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import styles from "../../styles/Project.module.scss";
import {
  deleteProject,
  likeProject,
} from "../../../apis/Projects/projects.actions";
import ButtonForm from "./../../Form/ButtonForm";
import { IProps } from "../interface";
import { useMutation } from "react-query";
import axios from "axios";
import { useDispatchDeleteProject } from "../../../apis/Projects/api";
function Project({ project, setCurrentId }: IProps): JSX.Element {
  const useDipsatchDelete = useMutation((id: string) => {
    return axios.delete(`http://localhost:3000/projects/api/${id}`);
  });

  return (
    <>
      <Card className={styles.card}>
        <CardMedia
          className={styles.media}
          image={project.selectedFile}
          title={project.title}
        />
        <div className={styles.overlay}>
          <Typography variant="body2">
            {moment(project.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={styles.overlaytwo}>
          <ButtonForm
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(project._id)}
          >
            <MoreHorizIcon fontSize="medium" />
          </ButtonForm>
        </div>
        <div className={styles.details}>
          <Typography variant="body2" color="textSecondary">
            {project.tags.map((tag: string) => `#${tag} `)}
          </Typography>
        </div>

        <Typography className={styles.title} variant="h5" gutterBottom>
          {project.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" gutterBottom>
            {project.description}
          </Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <ButtonForm
            size="small"
            color="primary"
            // onClick={() => dispatch(likeProject(project._id))}
            className={styles.btnProject}
          >
            <span className={styles.span}>{project.likeCount}</span>
            <ThumbUpAltIcon fontSize="small" />
            <span className={styles.span}>Like</span>
          </ButtonForm>
          <ButtonForm
            size="small"
            color="secondary"
            onClick={() => useDipsatchDelete.mutateAsync(project._id)}
            className={styles.btnProject}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </ButtonForm>
        </CardActions>
      </Card>
    </>
  );
}

export default Project;

