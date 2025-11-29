import { Skeleton } from "@/components/ui/skeleton"

function CardSkeleton() {
    return (
        <div className="group relative flex-shrink-0 w-[200px] cursor-pointer">
            <Skeleton className="w-full h-[250px] overflow-hidden drop-shadow-lg" />
        </div>
    );
}

export default CardSkeleton;