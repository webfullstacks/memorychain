import { useRef } from "react";

export const Video = () => {
    const video = useRef<HTMLVideoElement | null>(null);
    const play = useRef<HTMLButtonElement | null>(null);

    const onStart = () => {
        const isPaused = video.current?.paused;

        const isShowControls = !!video.current?.getAttribute("controls");

        if (isShowControls) return;

        if (isPaused) {
            play.current?.classList.add("hidden");
            video.current?.play();
            video.current?.setAttribute("controls", "true");
        }
    };

    return (
        <section className="py-16 lg:py-52 bg-light-gray relative z-10">
            <div className="container lg:max-w-[1021px] lg:p-0">
                <div
                    className="relative overflow-hidden rounded-xl lg:rounded-[32px] h-80 lg:h-[573px]"
                    onClick={onStart}
                >
                    <video
                        ref={video}
                        controls={false}
                        playsInline
                        poster="/images/main/video/poster.png"
                        className="w-full h-full bg-violet object-cover"
                    >
                        <source src="/videos/main-video.mp4" type="video/mp4" />
                    </video>
                    <button
                        ref={play}
                        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-white flex justify-center items-center"
                    >
                        <img
                            className="ml-1 w-6 h-6 pointer-events-none"
                            loading="lazy"
                            src="/icons/play.svg"
                            alt="play"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};
