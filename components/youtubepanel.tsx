export const YoutubePanel = ({ video }) => {

    function getVideoId() {
        return `https://www.youtube.com/embed/${video.data[0].videoData.items[0].snippet.resourceId.videoId}`;
    }

    return (
        <div className="rounded-lg bg-[#1b2126] shadow h-100">
            <iframe
                className='aspect-video'
                width={'100%'} 
                height={'100%'}
                src={getVideoId()} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>
    );
}