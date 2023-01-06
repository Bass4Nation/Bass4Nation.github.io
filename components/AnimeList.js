import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

// const GET_USER = gql`
//   query {
//     User(name: "Bass4Nation") {
//       id
//       name
//       avatar {
//         large
//       }
//     }
//   }
// `;
const url = "https://graphql.anilist.co";
const query = `
query ($name: String, $listType: MediaType) {
  User(name: $name) {
    id
    name
    mediaList(type: $listType, status: COMPLETED) {
      media {
        id
        title {
          romaji
          english
          native
        }
      }
    }
  }
}
`;

var variables = {
  name: "Bass4Nation",
  listType: "ANIME",
};

fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
    .then(response => response.json())
    .then(data => {
      // Print the list of anime shows that the user has watched
      console.log(data);
    //   for (const item of data.data.User.mediaList) {
    //     console.log(item.media.title.romaji);
    //   }
    });

// Define the config we'll need for our Api request
// var url = 'https://graphql.anilist.co',
// options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     query: query,
//     variables: variables,
//   }),
// };

// Make the HTTP Api request
// fetch(url, options).then(handleResponse).then(handleData).catch(handleError);

// function handleResponse(response) {
//   return response.json().then(function (json) {
//     return response.ok ? json : Promise.reject(json);
//   });
// }

// function handleData(data) {
//   console.log(data);
// }

// function handleError(error) {
//   alert("Error, check console");
//   console.error(error);
// }

const AnimeList = () => {
  //   const { loading, error, data } = useQuery(GET_USER);
  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error :(</p>;

  return <section></section>;
};

export default AnimeList;
