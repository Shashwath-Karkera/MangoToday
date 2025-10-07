export const samplePosts = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in Finance",
    excerpt: "Exploring how AI is revolutionizing financial services, from algorithmic trading to personalized banking experiences.",
    content: `Artificial Intelligence is transforming the financial industry in unprecedented ways. From algorithmic trading systems that can process millions of data points in seconds to AI-powered chatbots providing 24/7 customer service, the impact is profound.

Machine learning algorithms are now capable of detecting fraudulent transactions with accuracy rates exceeding human capabilities. Banks are using AI to assess credit risk more accurately, while investment firms leverage predictive analytics to identify market trends.

The integration of AI in personal finance apps has made financial planning more accessible to the general public. These tools can analyze spending patterns, suggest budgets, and even provide investment recommendations tailored to individual goals and risk tolerance.

However, with these advancements come challenges. Regulatory frameworks need to evolve to address AI-driven financial decisions, and ethical considerations around data privacy and algorithmic bias must be carefully managed.

As we move forward, the synergy between AI and finance will continue to create new opportunities while demanding responsible implementation.`,
    category: "finance",
    author: "Shashwath Karkera",
    date: "2025-01-15",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "React 18: What's New and Why It Matters",
    excerpt: "A comprehensive look at the latest features in React 18 and how they improve developer experience and application performance.",
    content: `React 18 represents a significant milestone in the evolution of the popular JavaScript library. The introduction of concurrent features has opened up new possibilities for building more responsive and user-friendly applications.

One of the most exciting additions is automatic batching, which groups multiple state updates into a single re-render, resulting in better performance. The new startTransition API allows developers to mark certain updates as non-urgent, keeping the interface responsive even during heavy computational tasks.

The createRoot API replaces ReactDOM.render and enables concurrent features, while the new Suspense improvements make it easier to handle loading states in your applications.

For developers working on data-heavy applications, the useDeferredValue hook provides a way to defer updating less important parts of the UI, ensuring that critical interactions remain smooth.

These features, combined with ongoing improvements to the React ecosystem, demonstrate the team's commitment to making React the go-to choice for building modern web applications. As we adopt these new patterns, we're able to create experiences that feel more native and responsive to users.`,
    category: "tech",
    author: "Shashwath Karkera",
    date: "2025-01-10",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

// Initialize localStorage with sample posts if empty
export const initializePosts = () => {
  if (!localStorage.getItem('blogPosts')) {
    localStorage.setItem('blogPosts', JSON.stringify(samplePosts));
  }
};