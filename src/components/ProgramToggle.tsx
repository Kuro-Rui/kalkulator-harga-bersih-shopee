import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ProgramToggleProps {
    icon: LucideIcon;
    title: string;
    description: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    badge?: string;
    disabled?: boolean;
}

export function ProgramToggle({
    icon: Icon,
    title,
    description,
    checked,
    onChange,
    badge,
    disabled = false,
}: ProgramToggleProps) {
    return (
        <div
            className={cn(
                "flex items-start gap-4 p-4 rounded-xl border-2 transition-all duration-200",
                checked ? "border-primary/30 bg-accent" : "border-border bg-card",
                disabled && "opacity-50 cursor-not-allowed",
            )}
        >
            <div
                className={cn(
                    "p-2.5 rounded-lg transition-colors shrink-0",
                    checked
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground",
                )}
            >
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-semibold text-sm">{title}</span>
                    {badge && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {badge}
                        </span>
                    )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {description}
                </p>
            </div>
            <Switch
                checked={checked}
                onCheckedChange={onChange}
                disabled={disabled}
                className="shrink-0"
            />
        </div>
    );
}
