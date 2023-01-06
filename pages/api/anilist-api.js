




// const baseUrl = 'https://graphql.anilist.co';

// export async function getUser(username) {
//   const query = `
//     query {
//       User(name: Bass4Nation) {
//         id
//         name
//         avatar {
//           large
//         }
//       }
//     }
//   `;

//   const res = await fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization: '9NNlJbtt2yQ6BcPLkMNJ6iDqSWMwtJMf6Nx4ENbB',
//     },
//     body: JSON.stringify({ query }),
//   });
//   console.log(res);
//   return await res.json();
// }