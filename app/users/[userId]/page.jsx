export const generateMetadata = async ({ params }) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`New User Ademimpe ${params.userId}`);
    }, 1000);
  });

  return {
    title: `${title}`,
  };
};

const userDetails = ({ params }) => {
  return <h1>User details goes in here. {params.userId}</h1>;
};

export default userDetails;
