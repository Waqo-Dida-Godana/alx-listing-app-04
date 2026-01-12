import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative h-48 w-full">
          <Image
            src={property.image}
            alt={property.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold">{property.name}</h3>
          <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
          <p className="text-green-600 font-semibold mt-2">${property.price} / night</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm text-gray-700">{property.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
