interface ProjectGalleryProps {
    images?: string[];
    title: string;
}

export function ProjectGallery({images = [], title}: ProjectGalleryProps) {
    return (
        <>
            <div className="gallery">
                {images?.map((x, i) =>
                    <a href={x} target="_blank" key={x}>
                        <img src={x} alt={`${title} screenshot ${i + 1}`}/>
                    </a>)
                }
            </div>
        </>
    );
}
