import { sellerTypes, SellerType } from "@/data/shopeeCategories";
import { cn } from "@/lib/utils";
import { Store, Star, Award, Building2 } from "lucide-react";

interface SellerTypeSelectorProps {
    value: SellerType;
    onChange: (value: SellerType) => void;
}

const icons: Record<SellerType, React.ReactNode> = {
    non_star: <Store className="w-5 h-5" />,
    star: <Star className="w-5 h-5" />,
    star_plus: <Award className="w-5 h-5" />,
    mall: <Building2 className="w-5 h-5" />,
};

export function SellerTypeSelector({ value, onChange }: SellerTypeSelectorProps) {
    return (
        <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">Tipe Penjual</label>
            <div className="grid grid-cols-2 gap-3">
                {sellerTypes.map((type) => (
                    <button
                        key={type.value}
                        type="button"
                        onClick={() => onChange(type.value)}
                        className={cn(
                            "relative flex flex-col items-start p-4 rounded-xl border-2 transition-all duration-200",
                            "hover:border-primary/50 hover:shadow-md",
                            value === type.value
                                ? "border-primary bg-accent shadow-shopee"
                                : "border-border bg-card",
                        )}
                    >
                        <div
                            className={cn(
                                "p-2 rounded-lg mb-2 transition-colors",
                                value === type.value
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground",
                            )}
                        >
                            {icons[type.value]}
                        </div>
                        <span className="font-semibold text-sm">{type.label}</span>
                        <span className="text-xs text-muted-foreground mt-0.5">
                            {type.description}
                        </span>
                        {value === type.value && (
                            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary animate-pulse" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
