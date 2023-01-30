import Headtitle from "../components/Headtitle";
import websitesTextEn from "./api/data/websites";
import Link from "next/link";

const websites = () => {
  return (
    <section>
      <Headtitle title="Websites" />
      <h1>
        Here is a list on other webpages I have worked on. Just for fun :)
      </h1>
      <section>
        {websitesTextEn.map((website) => (
          <section key={website.id}>
            <h2>{website.title}</h2>
            <p>{website.description}</p>
            <Link href={website.url}> {website.url}</Link>
            </section>
            ))}

      </section>
    </section>
  );
};

export default websites;
