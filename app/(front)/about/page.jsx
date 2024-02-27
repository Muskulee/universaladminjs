import Layout from "./../layout";

const About = () => {
  return <div>Layout</div>;
};

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
