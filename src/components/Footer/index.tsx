import InstagramLogo from "../icons/Instagram";
import TwitterLogo from "../icons/Twitter";
import TwitchLogo from "../icons/Twitch";

const Footer = () => {
  return (
    <div className="flex align-middle flex-col justify-center w-full gap-4 py-6">
      <div className="flex gap-3 mx-auto">
        <a href="#" title="Follow us on Instagram" aria-label="Follow us on Instagram">
          <InstagramLogo />
        </a>
        <a href="#" title="Follow us on Twitch" aria-label="Follow us on Twitch">
          <TwitchLogo />
        </a>
        <a href="#" title="Follow us on Twitter" aria-label="Follow us on Twitter">
          <TwitterLogo />
        </a>
      </div>
      <p className="text-center text-xs">@2023 Handpicked by AI. All rights reserved</p>
    </div>
  );
};

export default Footer;
