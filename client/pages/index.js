import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log("Current user", currentUser);
  return <h1>index</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    const response = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: req.headers,
      }
    );
    return response.data;
  } else {
    const response = await axios.get("/api/users/currentuser");
    return response.data;
  }
};

export default LandingPage;
