import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  IconButton,
} from "@mui/material";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Custom Icons
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import testimonial images
import Testimonal_1 from "../../assets/Testimonial-1.png";
import Testimonal_2 from "../../assets/Testimonial-2.png";
import Testimonal_3 from "../../assets/Testimonial-3.png";
import Testimonal_4 from "../../assets/Testimonial-4.png";
import Testimonal_5 from "../../assets/Testimonial-5.png";
import Testimonal_6 from "../../assets/Testimonial-6.png";
import Testimonal_7 from "../../assets/Testimonial-7.png";
import Testimonal_8 from "../../assets/Testimonial-8.png";
import Testimonal_9 from "../../assets/Testimonial-9.png";
import Testimonal_10 from "../../assets/Testimonial-10.png";

// **Testimonial Data**
const testimonials = [
  {
    image: Testimonal_1,
    name: "John Doe",
    text: "Crypto trading changed my life!",
    rating: 5,
  },
  {
    image: Testimonal_2,
    name: "Jane Smith",
    text: "The best investment platform!",
    rating: 4,
  },
  {
    image: Testimonal_3,
    name: "Michael Lee",
    text: "Smooth transactions, fast support!",
    rating: 5,
  },
  {
    image: Testimonal_4,
    name: "Alice Johnson",
    text: "A trustworthy platform.",
    rating: 4,
  },
  {
    image: Testimonal_5,
    name: "Robert Brown",
    text: "My portfolio has grown massively!",
    rating: 4,
  },
  {
    image: Testimonal_6,
    name: "Emily Davis",
    text: "Best rates and lowest fees!",
    rating: 5,
  },
  {
    image: Testimonal_7,
    name: "William Wilson",
    text: "Trading made simple!",
    rating: 5,
  },
  {
    image: Testimonal_8,
    name: "Sophia Martinez",
    text: "Great experience and security!",
    rating: 4,
  },
  {
    image: Testimonal_9,
    name: "Liam Anderson",
    text: "Crypto is the future!",
    rating: 5,
  },
  {
    image: Testimonal_10,
    name: "Olivia Thomas",
    text: "Secure and consistent profits!",
    rating: 5,
  },
];

const TestimonalsSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  // **Custom Navigation Buttons**
  const CustomPrevButton = () => (
    <IconButton
      onClick={() => swiperInstance?.slidePrev()} // Check if instance exists
      sx={{
        position: "absolute",
        top: "50%",
        left: "-30px",
        zIndex: 10,
        backgroundColor: "#ff9900",
        color: "white",
        "&:hover": { backgroundColor: "#ff6600" },
      }}
    >
      <AiOutlineLeft size={24} />
    </IconButton>
  );

  const CustomNextButton = () => (
    <IconButton
      onClick={() => swiperInstance?.slideNext()} // Check if instance exists
      sx={{
        position: "absolute",
        top: "50%",
        right: "-30px",
        zIndex: 10,
        backgroundColor: "#ff9900",
        color: "white",
        "&:hover": { backgroundColor: "#ff6600" },
      }}
    >
      <AiOutlineRight size={24} />
    </IconButton>
  );

  return (
    <section
      className="w-full  md:!p-10"
      style={{
        background: "linear-gradient(135deg, #DFFFCD, #90F9C4, #39F3BB)",
      }}
    >
      <div className="!my-8">
        <div className="text-center !space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-sky-500 inline-block text-black">
            Testimonials
          </h2>
          <h3 className="text-orange-500 text-xl md:text-2xl lg:text-3xl font-semibold">
            Join 100K+ Happy Investors.
          </h3>
          <p className="text-white text-xl font-[400] italic capitalize">
            <span>&quot;</span>This platform is a game-changer! The fastest
            transactions and lowest fees.<span>&quot;</span> <br />
            <span className="font-bold">– CryptoTraderX</span>
          </p>
        </div>

        <div className="!p-2 !my-5 relative">
          {/* Swiper with Custom Buttons */}
          <Box>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              onSwiper={setSwiperInstance} // **Store Swiper instance properly**
              pagination={{
                clickable: true,
                el: ".custom-pagination", // Custom class
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="relative"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      margin: "auto",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        height: 80,
                        width: 80,
                        margin: "15px auto 0",
                        borderRadius: "50%",
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {testimonial.text}
                      </Typography>
                      <Box className="!my-4 flex items-center gap-2 font-bold text-lg">
                        <span>Rating:</span>
                        <span className="flex items-center">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <FaStar key={i} className="text-amber-500" />
                            )
                          )}
                        </span>
                      </Box>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <CustomPrevButton />
            <CustomNextButton />
          </Box>

          {/* Swiper Pagination (Centered Below the Cards) */}
          <div className="custom-pagination text-center !mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonalsSection;
