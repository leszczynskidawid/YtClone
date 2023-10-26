import {
  Box,
  Typography,
  Grid,
  CardMedia,
  Avatar,
  Button,
  Paper,
  Collapse,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/system";
import { ChannelInfoWrapper } from "./ChannelInfoWrapper";
import { ButtonsActionWrapper } from "./ButtonsWrapper";
import { DiscribeVidoWrapper } from "./DiscribeVideoWrapper";
import Stack from "@mui/material/Stack";

import { useApi } from "../../Hooks/useApi";
import { endpoints } from "../../Constants/Endpoints/getEnpoins";
import { useEffect, useState } from "react";
import { formatNumber } from "../../Helpers/convertFunctions";
import moment from "moment";
import { useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { ConstructionOutlined, ThumbDown } from "@mui/icons-material";

export const VidoSelected = ({ data }) => {
  return (
    <Grid container>
      <Grid item>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: "0",
            background: "red",
          }}
        >
          <CardMedia
            component="iframe"
            src={`https://www.youtube.com/embed/  ?autoplay=1`}
            allow="autoplay"
            frameBorder="0"
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <ChannelInfoWrapper data={data} />

        <DiscribeVidoWrapper data={data} />

        <CommentCmponent videoId={data.videoId} />
      </Grid>
    </Grid>
  );
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const CommnetCard = ({ data }) => {
  const {
    textOriginal,
    authorProfileImageUrl,
    authorDisplayName,
    publishedAt,
    likeCount,
    videoId,
  } = data.topLevelComment;

  console.log(data.topLevelComment);

  return (
    <Grid item>
      <Box
        display={"flex"}
        gap={2}
        justifyContent={"left"}
        alignItems={"center"}
      >
        <CardCommentComponent
          textDisplay={textOriginal}
          authorProfileImageUrl={authorProfileImageUrl}
          authorDisplayName={authorDisplayName}
          publishedAt={publishedAt}
          likeCount={likeCount}
        />
      </Box>
      {data.hasReplies && (
        <RepliesCommentComponentCard commnetId={data.parentId} />
      )}
    </Grid>
    //// jesli compoentn komentarz posiada odpowiedezu true : <Colaplase> </Colapalase/>
  );
}; ///////////////////////////////////////////////////

const RepliesCommentComponentCard = ({ commnetId }) => {
  const { fetchData, loading } = useApi();
  const [repiesComments, setRepliesComents] = useState([]);
  const [open, setOpen] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);

  const fetchCommentsData = async (id) => {
    const enpoint = `comments?part=snippet&parentId=${id}&maxResults=1&pageToken=${
      nextPageToken || ""
    }`;
    const commentsResults = await fetchData(enpoint);

    if (
      commentsResults.items.some(
        (newItem) =>
          !repiesComments.some((existingItem) => existingItem.id === newItem.id)
      )
    ) {
      setRepliesComents((prev) => [...prev, ...commentsResults.items]);
      setNextPageToken(commentsResults.nextPageToken);
    }
    console.log(commentsResults);
  };

  const handleFetchRepliceComments = () => {
    setOpen(!open);
  };
  useEffect(() => {
    fetchCommentsData(commnetId);
  }, []);
  const handleShowMoreComments = () => {
    fetchCommentsData(commnetId);
  };

  return (
    <Box>
      <Button
        onClick={handleFetchRepliceComments}
        sx={{ background: "transition", borderRadius: "40%", color: "blue" }}
      >
        komentarze
      </Button>
      <Collapse in={open}>
        {repiesComments.map((item) => (
          <CardCommentComponent
            textDisplay={item.snippet.textDisplay}
            authorProfileImageUrl={item.snippet.authorProfileImageUrl}
            authorDisplayName={item.snippet.authorDisplayName}
            publishedAt={item.snippet.publishedAt}
            likeCount={item.snippet.likeCount}
          />
        ))}
        {nextPageToken && (
          <Button onClick={handleShowMoreComments}>pokaż więcej</Button>
        )}
      </Collapse>

      {loading && <CircularProgress />}
    </Box>
  );
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////
//////////
///////
//
/////
/////
//////
///////
//////
//////
////////
/////
/////////
//////

const CommentCmponent = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const { fetchData, loading } = useApi();
  const observerRef = useRef();
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loader, setLoader] = useState(false);

  const fetchCommentsData = async () => {
    setLoader(true);

    const enpoint = `commentThreads?part=snippet,replies&videoId=${videoId}&maxResults=8&pageToken=${
      nextPageToken || ""
    }`;
    const commentsResults = await fetchData(enpoint);

    const commentsWithReplies = commentsResults.items.map((commentThread) => {
      const topLevelComment = commentThread.snippet.topLevelComment.snippet;
      const totalReplyCount = commentThread.snippet.totalReplyCount;
      const parentId = commentThread.id;

      return {
        parentId,
        topLevelComment,
        hasReplies: totalReplyCount > 0,
      };
    });
    console.log(comments);
    setComments((prevComments) => [...prevComments, ...commentsWithReplies]);
    setNextPageToken(commentsResults.nextPageToken);
    setLoader(false);
  };

  const handleObserverIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && loader === false) {
      fetchCommentsData();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserverIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loader]);

  return (
    <Stack spacing={3}>
      {comments.map((comment) => (
        <CommnetCard data={comment} />
      ))}
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <div
        ref={observerRef}
        style={{ height: "10px", background: "red", width: "500px" }}
      ></div>
    </Stack>
  );
};
//// to jest karta komentarza
//////
/////
///
//
//////
/////
/////
//////
/////
/////
///
///////
/////////

/////////
/////
///////
////
///////
///
////
///

const CardCommentComponent = ({
  textDisplay,
  authorProfileImageUrl,
  authorDisplayName,
  publishedAt,
  likeCount,
}) => {
  const SToggleButton = styled(ToggleButton)(({ theme, selected }) => ({
    border: "none",

    background: selected ? "transaprent" : "transparent",
    ":hover": {
      background: "none",
    },
    "&.Mui-selected": {
      background: "none",
    },
    "&.Mui-selected:hover": {
      background: "none",
    },
  }));
  const [alignment, setAlignment] = useState("like");

  const handleChange = (e, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Box alignSelf="flex-start">
        <Avatar src={authorProfileImageUrl}></Avatar>
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            gap: "10px",
          }}
        >
          <h3 style={{ margin: "0px", alignSelf: "flex-end" }}>
            {authorDisplayName}
          </h3>
          <span
            style={{
              fontWeight: "100",
              margin: "0px",
              alignSelf: "flex-end",
            }}
          >
            {moment(publishedAt).startOf("hour").fromNow()}
          </span>
        </div>
        <Box
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordBreak: "break-word",
          }}
        >
          {textDisplay}
        </Box>

        <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
          <SToggleButton value="like">
            {alignment === "like" ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
            {likeCount}
          </SToggleButton>
          <SToggleButton value="dislike">
            {alignment === "dislike" ? <ThumbDown /> : <ThumbDownOffAltIcon />}
            odpowiedz
          </SToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
};
