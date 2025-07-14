import { useState } from "react";

export function ArticleCard({
    icon: Icon,
    title,
    description,
    isActive = false,
    onClick,
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article
            className={`
        group relative p-6 rounded-xl border-2 border-dashed transition-all duration-300 cursor-pointer
        ${
            isActive
                ? "border-blue-400 bg-blue-50/50 shadow-lg"
                : "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/30"
        }
        ${isHovered ? "transform -translate-y-1 shadow-md" : ""}
      `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick?.();
                }
            }}
            aria-pressed={isActive}
        >
            {/* Icon */}
            <div
                className={`
        w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300
        ${
            isActive
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
        }
      `}
            >
                <Icon size={24} />
            </div>

            {/* Title */}
            <h3
                className={`
        text-lg font-semibold mb-3 transition-colors duration-300
        ${
            isActive
                ? "text-blue-900"
                : "text-gray-900 group-hover:text-blue-800"
        }
      `}
            >
                {title}
            </h3>

            {/* Description */}
            <p
                className={`
        text-sm leading-relaxed transition-colors duration-300
        ${
            isActive
                ? "text-blue-700"
                : "text-gray-600 group-hover:text-gray-700"
        }
      `}
            >
                {description}
            </p>

            {/* Active indicator */}
            {isActive && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            )}

            {/* Hover overlay */}
            <div
                className={`
        absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none
        ${
            isHovered && !isActive
                ? "bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-100"
                : "opacity-0"
        }
      `}
            />
        </article>
    );
}
