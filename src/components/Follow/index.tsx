import InstagramLogo from "../icons/Instagram";
import TwitterLogo from "../icons/Twitter";
import TwitchLogo from "../icons/Twitch";

const Follow = () => {
    return ( <div className="flex justify-between w-full">  
        <h3 className="font-monoton text-xl text-primary-color">Follow us</h3>
        <div className="flex gap-3">
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
    </div> );
}
 
export default Follow;