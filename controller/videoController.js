import { videoList } from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("Home", { pageTitle: "Home", videoList });
}

export const search = (req, res) => {
    const {query: { term: searchingBy }} = req;
    res.render("Search", { pageTitle: "Search", searchingBy: searchingBy, videoList });
}

export const getUpload = (req, res) => {
    res.render("Upload", { pageTitle: "Upload" });
}

export const postUpload = (req, res) => {
    const {
        body: {
            file,
            title,
            description
        }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(1));
}

export const videos = (req, res) => res.render("Videos", { pageTitle: "Videos" });


export const videoDetail = (req, res) => res.render("VideoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) => res.render("EditVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("DeleteVideo", { pageTitle: "Delete Video" });
