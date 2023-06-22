import React from "react";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results: <span style={{ color: "#FC1503" }}>{searchTerm}</span>{" "}
        videos
      </Typography>

      <Videos videos={videos} widthTrue="true" />
    </Box>
  );
};

export default SearchFeed;
