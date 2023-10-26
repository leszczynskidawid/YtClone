import { Avatar, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { SButton } from "./Button";
import { ButtonsActionWrapper } from "./ButtonsWrapper";
import { formatNumber } from "../../Helpers/convertFunctions";

export const ChannelInfoWrapper = ({ data }) => {
  const { title, channelImage, subscriberCount, channelTitle } = data;

  return (
    <div>
      <h3>{title}</h3>
      <div
        style={{
          display: "flex",
          height: "54px",
          gap: "10px",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Avatar src={channelImage} />
        <div style={{ lineHeight: "5px" }}>
          <p style={{ fontWeight: 900 }}>{channelTitle}</p>
          <p>{formatNumber(subscriberCount)} subskrybentów</p>
        </div>
        <SButton>subskybuj</SButton>
        <ButtonsActionWrapper />
      </div>
    </div>
  );
};
