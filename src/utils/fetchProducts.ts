import axios from "axios";

export const fetchProducts = async () => {
  const token = import.meta.env.VITE_API_TOKEN;
  const url = import.meta.env.VITE_API_URL;

      try {
        const response = await axios.get(
          url+"products",
          {
            headers: {
              accept: "application/json",
              content: "application/json",
              Authorization:
                "Bearer " + token,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.log("---->",error);
      }
    };




