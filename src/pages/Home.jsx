import React from 'react';
import { Link } from 'react-router-dom';
import Card, { CardBody, CardFooter } from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with ease.',
      icon: '✅',
      path: '/tasks'
    },
    {
      title: 'API Integration',
      description: 'Explore data from external APIs with search and pagination.',
      icon: '🌐',
      path: '/api-data'
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for comfortable viewing.',
      icon: '🌙',
      path: '/'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          PLP Task Manager
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          A modern, responsive task management application built with React.js and Tailwind CSS.
          Manage your tasks efficiently with a beautiful dark/light theme.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="lg" className="shadow-md">
              Get Started
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" size="lg">
              Explore API
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardBody className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardBody>
              <CardFooter className="text-center">
                <Link to={feature.path}>
                  <Button variant="primary" size="sm">
                    Explore
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Responsive</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">∞</div>
            <div className="text-gray-600 dark:text-gray-400">Tasks</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Accessible</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;