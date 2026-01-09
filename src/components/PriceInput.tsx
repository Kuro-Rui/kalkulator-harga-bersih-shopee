import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface PriceInputProps {
    value: number | null;
    onChange: (value: number | null) => void;
    label: string;
    placeholder?: string;
    className?: string;
}

export function PriceInput({
    value,
    onChange,
    label,
    placeholder = "Masukkan harga...",
    className,
}: PriceInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Jika kosong, set ke null marker
        if (inputValue === "" || inputValue === "Rp" || inputValue === "Rp ") {
            onChange(null);
            return;
        }

        // Jika hanya "-", set marker untuk minus saja
        if (inputValue === "-") {
            onChange(-0.001);
            return;
        }

        // Izinkan minus di awal dan angka saja
        const isNegative = inputValue.startsWith("-");
        const rawValue = inputValue.replace(/[^\d]/g, "");

        if (rawValue === "") {
            onChange(isNegative ? -0.001 : null);
            return;
        }

        // Batasi maksimal 9 digit
        const numValue = parseInt(rawValue.slice(0, 9), 10);
        onChange(isNegative ? -numValue : numValue);
    };

    const displayValue = (() => {
        if (value === null || value === undefined) return "";
        if (value === -0.001) return "-";
        if (value === 0) return "0";
        return (value < 0 ? "-" : "") + Math.abs(value).toLocaleString("id-ID");
    })();

    return (
        <div className={cn("space-y-3", className)}>
            <label className="block text-sm font-semibold text-foreground">{label}</label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                    Rp
                </span>
                <Input
                    type="text"
                    inputMode="numeric"
                    value={displayValue}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={cn(
                        "h-14 pl-12 pr-4 text-lg font-semibold bg-card border-2 border-border hover:border-primary/50 focus:border-primary input-glow transition-colors",
                    )}
                />
            </div>
        </div>
    );
}
