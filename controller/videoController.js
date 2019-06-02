import routes from "../routes";
import Video from "../models/Video"

export const home = async (req, res) => {
    try{
        const videos = await Video.find({});
        res.render("Home", { pageTitle: "Home", videos });
    }catch(error){
        console.log(error);
        res.render("Home", { pageTitle: "Home", videos: [] });
    }
}

export const search = async (req, res) => {
    const {query: { term: searchingBy }} = req;
    const videos = await Video.find({});
    res.render("Search", { pageTitle: "Search", searchingBy: searchingBy, videos });
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
