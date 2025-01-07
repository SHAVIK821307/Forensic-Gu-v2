export function GalleryImage({ src, alt }) {
    return (
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    )
  }