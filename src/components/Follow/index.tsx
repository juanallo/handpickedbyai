import InstagramLogo from "../icons/Instagram";
import TwitterLogo from "../icons/Twitter";
import TwitchLogo from "../icons/Twitch";

const Follow = () => {
    return ( <div className="flex justify-between w-full"> 
        <h3> Follow us</h3>
        <div className="flex gap-3">
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
    </div> );
}
 
export default Follow;