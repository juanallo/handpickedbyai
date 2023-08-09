import InstagramLogo from "../icons/Instagram";
import TwitterLogo from "../icons/Twitter";
import TwitchLogo from "../icons/Twitch";

const Footer = () => {
  return (
    <div className="flex align-middle flex-col justify-center w-full gap-4 py-6">
      <div className="flex gap-3 mx-auto">
        <a href="#">
          <InstagramLogo />
        </a>
        <a href="#">
          <TwitchLogo />
        </a>
        <a href="#">
          <TwitterLogo />
        </a>
      </div>
      <p className="text-center text-xs">@2023 Handpicked by AI. All rights reserved</p>
    </div>
  );
};

export default Footer;
