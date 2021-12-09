import React, { useEffect, useState } from "react";
import {
  SupportWrapper,
  TagContainer,
  Tag,
  IssueWrapper,
  Description,
  IconWithButton,
} from "./styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Tooltip from "@mui/material/Tooltip";
import { apiInstance } from "utils/api";
import moment from "moment";
export default function Support() {
  const [supports, setSupports] = useState([]);
  useEffect(() => {
    apiInstance
      .get("/supports")
      .then((res) => setSupports(res.data.supports))
      .catch((err) => console.log({ err }));
  }, []);
  return (
    <>
      {supports.length > 0 ? (
        supports.map((el, index) => (
          <SupportWrapper key={index}>
            <TagContainer>
              <span>{el.description}</span>
              <IssueWrapper>
                <Tag label={el.issue_status ? "Opened" : "Closed"} />
                <Tag label={el.priority} type={el.priority === "high" && "urgent"} />
                <Description date>
                  {moment(el.createdAt).format("ll")}
                </Description>
                <Description>{el.title}</Description>
                <IconWithButton aria-label="delete">
                  <Tooltip title="Open" placement="top">
                    <ChevronRightIcon style={{ fontSize: 40 }} />
                  </Tooltip>
                </IconWithButton>
              </IssueWrapper>
            </TagContainer>
          </SupportWrapper>
        ))
      ) : (
        <div>No issues yet!</div>
      )}
    </>
  );
}
