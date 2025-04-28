import Card from './card'

export default function CardGrid() {
  const cards = [
    {
      title: 'Easy to Use',
      description: 'Our platform is designed to be intuitive and user-friendly.',
      icon: '👍'
    },
    {
      title: 'Powerful Features',
      description: 'Access advanced tools to supercharge your workflow.',
      icon: '⚡'
    },
    {
      title: '24/7 Support',
      description: 'Our team is always available to help you with any questions.',
      icon: '👽'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}