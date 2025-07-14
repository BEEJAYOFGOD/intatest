import { useState } from "react";
import { Calendar, Search, MessageCircle, BarChart3 } from "lucide-react";
import { ArticleCard } from "./article.component";

const featuresData = [
    {
        id: "scheduling",
        icon: Calendar,
        title: "Never miss to post again",
        description:
            "Stay on track with easy scheduling and automatic reminders, so you always show up for your audience.",
    },
    {
        id: "integration-1",
        icon: Search,
        title: "Social Media Integration",
        description:
            "Seamlessly connect WhatsApp and Instagram to streamline messaging, scheduling, and analytics—all in one place.",
    },
    {
        id: "integration-2",
        icon: MessageCircle,
        title: "Social Media Integration",
        description:
            "Seamlessly connect WhatsApp and Instagram to streamline messaging, scheduling, and analytics—all in one place.",
    },
    {
        id: "integration-3",
        icon: BarChart3,
        title: "Social Media Integration",
        description:
            "Seamlessly connect WhatsApp and Instagram to streamline messaging, scheduling, and analytics—all in one place.",
    },
];

export default function FeaturesSection() {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (cardId) => {
        setActiveCard(activeCard === cardId ? null : cardId);
    };

    return (
        <section
            className="py-16 bg-gray-50"
            aria-labelledby="features-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="text-center mb-12">
                    <h2
                        id="features-heading"
                        className="text-3xl font-bold text-gray-900 mb-4"
                    >
                        Powerful Features for Social Media Success
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to manage, schedule, and analyze
                        your social media presence in one integrated platform.
                    </p>
                </header>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuresData.map((feature) => (
                        <ArticleCard
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            isActive={activeCard === feature.id}
                            onClick={() => handleCardClick(feature.id)}
                        />
                    ))}
                </div>

                {/* Additional Info */}
                {activeCard && (
                    <div className="mt-8 p-6 bg-white rounded-xl border border-blue-200 shadow-sm">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                Learn More About This Feature
                            </h3>
                            <p className="text-blue-700 mb-4">
                                {
                                    featuresData.find(
                                        (f) => f.id === activeCard
                                    )?.title
                                }
                            </p>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200"
                                onClick={() => setActiveCard(null)}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
