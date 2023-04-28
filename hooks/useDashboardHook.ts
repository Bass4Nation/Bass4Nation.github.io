import { useState, useEffect } from "react";
import axios from "axios";

const serverUrls = "https://algorithm-express-server.vercel.app/";
const serverCommand = (command: string) => {
  if (!command) {
    return serverUrls;
  } else {
    return serverUrls + command;
  }
};
// https://algorithm-express-server.vercel.app/posts?col=posts
export const useGetFirebaseCollection = () => {
    const [elements, setElements] = useState("");

    useEffect(() => {
      const fetchHTML = async () => {
        try {
          const response = await axios.get(serverCommand("posts?col=posts")); // get the html from the server sending the url
         console.log(response.data);    
          const elementsArray = response.data;
  
          setElements(elementsArray);
        } catch (error: any) {
          console.log("Axios Error:", error);
          console.log(
            "Error details:",
            error.response?.data,
            error.response?.status,
            error.response?.headers
          );
        }
      };
  
      fetchHTML();
    }, []); // Empty array ensures the effect runs only on component mount
  
    return elements;
};

