import { WallType } from "../types/wallType";

type Props = {
    wallpaper: WallType;
    onClick: () => void;
}

export const WallpaperItem = ({ wallpaper, onClick } : Props) => {
    return(
        <div onClick={onClick} className="cursor-pointer hover:opacity-80 p-1 ">
          <img src={`/assets/${wallpaper.url}`} alt={wallpaper.name} className="w-full h-full object-fill"/>  
        </div>
    );
}