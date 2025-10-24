import Container from '../../Components/Container';
import BlogCard from '../../Components/BlogCard';
import Img1 from '../../assets/blogImg1.png';
import Img2 from '../../assets/blogImg2.png';
import Img3 from '../../assets/blogImg3.png';
import Img4 from '../../assets/blogImg4.png';
import Img5 from '../../assets/blogImg5.png';
import Img6 from '../../assets/blogImg6.png';


const BlogPage = () => {
  return (
    <Container>
      <h2 className='text-center text-5xl font-semibold font-Poppins text-Dark-Blue lg:mt-32 mt-10'>Our Blog</h2>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        <BlogCard
          image={Img1}
          date="27 Jan 2021"
          title="How one Webflow user grew his single person consultancy from $0–100K in 14 months"
          description="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract more clients."
          link="#"
        />
        <BlogCard
          image={Img2}
          date="27 Jan 2021"
          title="How one Webflow user grew his single person consultancy from $0–100K in 14 months"
          description="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract more clients."
          link="#"
        />
        <BlogCard
          image={Img3}
          date="27 Jan 2021"
          title="How one Webflow user grew his single person consultancy from $0–100K in 14 months"
          description="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract more clients."
          link="#"
        />
        <BlogCard
          image={Img4}
          date="27 Jan 2021"
          title="How one Webflow user grew his single person consultancy from $0–100K in 14 months"
          description="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract more clients."
          link="#"
        />
        <BlogCard
          image={Img5}
          date="27 Jan 2021"
          title="How one Webflow user grew his single person consultancy from $0–100K in 14 months"
          description="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract more clients."
          link="#"
        />
        <BlogCard
          image={Img6}
          date="27 Jan 2021"
          title="How one Webflow user grew his single person consultancy from $0–100K in 14 months"
          description="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract more clients."
          link="#"
        />
      </div>

    </Container>
  );
};

export default BlogPage;