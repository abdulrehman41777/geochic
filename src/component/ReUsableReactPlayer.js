import React, { useState } from 'react'
import ReactPlayer from "react-player";


const ReUsableReactPlayer = (props) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const playVid = (status) => {
        setIsPlaying(status);
    }
    

    return (
        <>
            <div className={`${isPlaying ? 'd-none' : 'd-block'} ${props.className}`}>
                <div className="img_desktop d_desktop"></div>
                <div className="img_mobile d_mobile"></div>
            </div>
            <ReactPlayer
                className="react-player"
                url={props.url}
                width="100%"
                height="100%"
                controls="true"
                playing={isPlaying}
                config={{
                    playerOptions: {
                        playsinline: true
                    }
                }}
            />
            <div onClick={() => playVid(true)} className={`${isPlaying ? 'd-none' : 'd-block'} ${props.iconClass} `}><img src={props.playIcon} alt="..."  /></div>
            <div onClick={() => playVid(false)} className={`${!isPlaying ? 'd-none' : 'd-block'} ${props.iconClass} `}><img src={props.pauseIcon} alt="..." /></div>
        </>
    )
}

export default ReUsableReactPlayer