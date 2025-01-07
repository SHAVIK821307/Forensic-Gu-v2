import img1 from "../assets/gallery/img1.jpg"
import img2 from "../assets/gallery/img2.jpg"
import img3 from "../assets/gallery/img3.jpg"
import img4 from "../assets/gallery/img4.jpg"
import img5 from "../assets/gallery/img5.jpg"
import img6 from "../assets/gallery/img6.jpg"
import img7 from "../assets/gallery/img7.jpg"
import img8 from "../assets/gallery/img8.jpg"
import img9 from "../assets/gallery/img9.jpg"
import img10 from "../assets/gallery/img10.jpg"
import img11 from "../assets/gallery/img11.jpg"
import img12 from "../assets/gallery/img12.jpg"
import img13 from "../assets/gallery/img13.jpg"
import img14 from "../assets/gallery/img14.jpg"
import img15 from "../assets/gallery/img15.jpg"
import img16 from "../assets/gallery/img16.jpg"
import img17 from "../assets/gallery/img17.jpg"
import img18 from "../assets/gallery/img18.jpg"
import img19 from "../assets/gallery/img19.jpg"
import img20 from "../assets/gallery/img20.jpg"
import img21 from "../assets/gallery/img21.jpg"
import { GalleryImage } from "./GalleryImage"

const galleryItems= [
    { id: 1, src: img1, alt: "Gallery Image 1" },
    { id: 2, src: img2, alt: "Gallery Image 2" },
    { id: 3, src: img3, alt: "Gallery Image 3" },
    { id: 4, src: img4, alt: "Gallery Image 4" },
    { id: 5, src: img5, alt: "Gallery Image 5" },
    { id: 6, src:img6, alt: "Gallery Image 6" },
    { id: 7, src: img7, alt: "Gallery Image 7" },
    { id: 8, src: img8, alt: "Gallery Image 8" },
    { id: 9, src: img9, alt: "Gallery Image 9" },
    { id: 10, src: img10, alt: "Gallery Image 10" },
    { id: 11, src: img11, alt: "Gallery Image 11" },
    { id: 12, src: img12, alt: "Gallery Image 12" },
    { id: 13, src: img13, alt: "Gallery Image 13" },
    { id: 14, src: img14, alt: "Gallery Image 14" },
    { id: 15, src: img15, alt: "Gallery Image 15" },
    { id: 16, src: img16, alt: "Gallery Image 16" },
    { id: 17, src: img17, alt: "Gallery Image 17" },
    { id: 18, src: img18, alt: "Gallery Image 18" },
    { id: 19, src: img19, alt: "Gallery Image 19" },
    { id: 20, src: img20, alt: "Gallery Image 20" },
    { id: 21, src: img21, alt: "Gallery Image 21" },
  ]
  
  export function GalleryItem() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Image Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <GalleryImage key={item.id} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    )
  }