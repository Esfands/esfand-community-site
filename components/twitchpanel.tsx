export const TwitchPanel = () => {
    
    return (
        <div className="overflow-auto rounded-lg bg-white shadow">
            <div>
                <iframe
                    className=" h-full aspect-video"
                    src="https://embed.twitch.tv/?channel=esfandtv&allowfullscreen=true&parent=www.esfans.net&layout=video&height=100%25&width=100%25"
                    allowFullScreen={true}
                    height={'100%'}
                    width={'100%'}
                    muted>
                </iframe>
            </div>
        </div>
    );
}