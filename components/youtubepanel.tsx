export const YoutubePanel = () => {
    return (
        <div className="rounded-lg bg-white shadow h-96">
            <iframe
                className='aspect-video'
                width={'100%'} 
                height={'100%'}
                src="https://www.youtube.com/embed/ifvkWc9Y9DU" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>
    );
}