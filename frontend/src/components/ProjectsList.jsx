import TechsList from "./TechsList";

import ALL_TECHS from "../assets/data/techs";

import theme from "../styles/theme";
import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Box,
    Typography,
} from "@mui/material";

import PropTypes from "prop-types";

const ProjectsList = ({ projectsArray, setProjectToShow, setShowDialog }) => {
    ProjectsList.propTypes = {
        projectsArray: PropTypes.array.isRequired,
        setProjectToShow: PropTypes.func.isRequired,
        setShowDialog: PropTypes.func.isRequired,
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {projectsArray?.map((project, index) => {
                const techsArray = ALL_TECHS.filter((tech) =>
                    project.mainTechs.includes(tech.label)
                );

                return (
                    <Card
                        key={index}
                        elevation={0}
                        sx={{
                            flexGrow: "1",
                            bgcolor: theme.palette.primary.main,
                            "&:hover": {
                                cursor: "pointer",
                                boxShadow: `0 0 5px 4px ${theme.palette.secondary.main}`,
                            },
                        }}
                        onClick={() => {
                            setProjectToShow(project);
                            setShowDialog(true);
                        }}>
                        <CardActionArea>
                            <Box sx={{ display: "flex" }}>
                                <CardMedia
                                    component="img"
                                    image={project.imgUrl}
                                    alt={project.title}
                                    sx={{
                                        height: "150px",
                                        maxWidth: "38%",
                                    }}
                                />
                                <CardContent
                                    sx={{
                                        p: ".3rem",
                                        "&:last-child": {
                                            pb: ".3rem",
                                        },
                                        flexGrow: "1",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: ".5rem",
                                    }}>
                                    <Typography
                                        component="h3"
                                        textTransform="uppercase"
                                        fontSize="1.2rem"
                                        fontWeight="700"
                                        color={theme.palette.text.title}>
                                        {project.shortTitle}
                                    </Typography>
                                    <TechsList
                                        techsArray={techsArray}
                                        location="home"
                                    />
                                </CardContent>
                            </Box>
                        </CardActionArea>
                    </Card>
                );
            })}
        </Box>
    );
};

export default ProjectsList;
