import React from "react";
import useNewsService from "../hooks/useNewsService";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button, CircularProgress } from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

// Formatted Date Component
const FormattedDate = ({ dateString }) => {
  const formattedDate = dayjs
    .utc(dateString)
    .tz("Asia/Kolkata")
    .format("dddd, MMMM D, YYYY h:mm A");

  return (
    <Typography variant="body2" sx={{ color: "text.secondary" }}>
      {formattedDate}
    </Typography>
  );
};

const NewsData = () => {
  // Fetching News From the API
  const { news, loading, error } = useNewsService();

  return (
    <>
      <section
        className="!p-5 md:!p-10"
        style={{
          backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        {/* News Grid */}
        {!loading && !error && news.length > 0 && (
          <div className="!container !mx-auto gap-6 grid grid-cols-1 lg:grid-cols-2 !p-5 ">
            {news.map((newsItem, index) => (
              <Card key={index} className="shadow-md">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ height: 300, objectFit: "cover" }}
                    image={newsItem.image}
                    alt={newsItem.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {newsItem.title.length > 30
                        ? `${newsItem.title.substring(0, 30)}...`
                        : newsItem.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {newsItem.content.length > 150
                        ? `${newsItem.content.substring(0, 150)}...`
                        : newsItem.content}
                    </Typography>
                  </CardContent>
                  <div className="!ml-5">
                    <FormattedDate dateString={newsItem.publishedAt} />
                  </div>
                </CardActionArea>

                <Button
                  variant="contained"
                  className="!bg-orange-500 !m-5"
                  component="a"
                  href={newsItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See More...
                </Button>
              </Card>
            ))}
          </div>
        )}

        {/* No News Found */}
        {!loading && !error && news.length === 0 && (
          <div className="flex justify-center items-center h-40 ">
            <div className="flex flex-col gap-4 justify-center items-center h-40">
              <CircularProgress className="!text-orange-500" />
              <h2 className="font-bold text-2xl text-orange-500">Loading...</h2>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default NewsData;
