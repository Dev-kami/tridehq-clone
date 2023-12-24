import { SocialIcon } from "react-social-icons";

const SocialIcons = ({ name }) => {
  if (name === "facebook")
    return (
      <SocialIcon
        bgColor="#383838"
        fgColor="#f4f4f4"
        url={`https://web.${name}.com/tridehq/`}
        style={{
          width: "1.7rem",
          height: "1.7rem",
        }}
      />
    );

  // Linkedin
  if (name === "linkedin")
    return (
      <SocialIcon
        bgColor="#383838"
        fgColor="#f4f4f4"
        url={`https://www.${name}.com/company/tridehq/`}
        style={{
          width: "1.7rem",
          height: "1.7rem",
        }}
      />
    );

  // X
  if (name === "x")
    return (
      <SocialIcon
        bgColor="#383838"
        fgColor="#f4f4f4"
        url={`https://www.${name}.com/tridehq/`}
        style={{
          width: "1.7rem",
          height: "1.7rem",
        }}
      />
    );

  // Instagram
  if (name === "instagram")
    return (
      <SocialIcon
        bgColor="#383838"
        fgColor="#f4f4f4"
        url={`https://www.${name}.com/tridehq/`}
        style={{
          width: "1.7rem",
          height: "1.7rem",
        }}
      />
    );
};

export default SocialIcons;
